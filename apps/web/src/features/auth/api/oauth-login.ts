type OauthLoginResponse = {
  accessToken: string
  refreshToken: string
}

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
  const params = [`state=${state}`, `code=${code}`].join('&')

  const response = await fetch(`${baseUrl}?${params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {

    const error = await response.json()
    throw new Error(error.message)
  }

  return await response.json() as OauthLoginResponse
}
