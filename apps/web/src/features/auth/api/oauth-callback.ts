'use server'

import { SocialProvider, AUTH_END_POINT } from '../config/auth-config'

export async function oauthCallback({
  provider,
  state,
  code
}: {
  provider: SocialProvider
  state: string
  code: string
}) {
  const baseUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}${AUTH_END_POINT.SOCIAL_CALLBACK(provider)}`
  const params = [`state=${state}`, `code=${code}`].join('&')

  const response = await fetch(`${baseUrl}?${params}`, {
    method: 'GET'
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message)
  }

  return response
}
