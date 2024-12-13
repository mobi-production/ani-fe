import type { AuthResponse } from '@/__mock__/types/auth'

export async function oauthLogin({
  provider,
  state,
  code
}: {
  provider: string
  state: string
  code: string
}) {
  const baseUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}/api/v1/auth/social/${provider}/callback`
  const parmas = [`state=${state}`, `code=${code}`].join('&')

  const response = await fetch(`${baseUrl}?${parmas}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  console.log('response', response)

  if (!response.ok) {
    console.log('에러 발생')
    const error = await response.json()
    throw new Error(error.message)
  }

  const data = await response.json()
  return data
}
