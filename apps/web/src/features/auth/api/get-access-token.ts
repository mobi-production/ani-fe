import { AUTH_END_POINT } from '@/features/auth/config/auth-config'

type GetAccessTokenResponse = {
  accessToken: string
  refreshToken: string
}

export const getAccessToken = async (): Promise<GetAccessTokenResponse> => {
  const baseURL = `${process.env.NEXT_PUBLIC_AUTH_URL}${AUTH_END_POINT.TOKEN}`
  const res = await fetch(baseURL)

  return (await res.json()) as GetAccessTokenResponse
}
