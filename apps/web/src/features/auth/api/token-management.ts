'use server'
import { cookies } from 'next/headers'

type TokenType = {
  accessToken: string
  refreshToken: string
}

const isServer = typeof window === 'undefined'

export const setServerToken = async ({ accessToken, refreshToken }: TokenType) => {
  if (!isServer) return

  const cookie = cookies()
  cookie.set('accessToken', accessToken, { httpOnly: true, path: '/' })
  cookie.set('refreshToken', refreshToken, { httpOnly: true, path: '/' })
}

export const updateServerToken = async ({ accessToken, refreshToken }: TokenType) => {
  if (!isServer) return

  await setServerToken({ accessToken, refreshToken })
}

export const removeServerToken = async () => {
  if (!isServer) return

  const cookie = cookies()
  cookie.delete('accessToken')
  cookie.delete('refreshToken')
}

export const getServerToken = async (): Promise<TokenType | null> => {
  if (!isServer) return null
  const cookie = cookies()
  const accessToken = cookie.get('accessToken')?.value || null
  const refreshToken = cookie.get('refreshToken')?.value || null

  if (accessToken && refreshToken) {
    return { accessToken, refreshToken }
  }

  return null
}
