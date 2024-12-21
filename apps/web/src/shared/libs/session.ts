'use server'

import { jwtVerify, SignJWT } from 'jose'
import { cookies } from 'next/headers'

const secreatKey = process.env.AUTH_SECRET
const encodeKey = new TextEncoder().encode(secreatKey)

type SessionPayload = {
  accessToken: string
  refreshToken: string
  expiresAt: Date
}

export async function createSession({
  accessToken,
  refreshToken
}: Omit<SessionPayload, 'expiresAt'>) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({ accessToken, refreshToken, expiresAt })

  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt
  })
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({
      alg: 'HS256'
    })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodeKey)
}

export async function decrypt(session: string) {
  return await jwtVerify(session, encodeKey)
}

export async function deleteSession() {
  cookies().delete('session')
}

export async function getSession() {
  const session = cookies().get('session')
  if (!session) return null

  const { payload } = await decrypt(session.value)
  return payload
}
