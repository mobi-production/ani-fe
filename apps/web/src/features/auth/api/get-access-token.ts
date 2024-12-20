import { AUTH_END_POINT } from '@/features/auth/config/auth-config'
import { axiosAuthInstance } from '@/shared/config/api/axios'

type GetAccessTokenResponse = {
  accessToken: string
  refreshToken: string
}

export const getAccessToken = async (): Promise<GetAccessTokenResponse> => {
  const res = await axiosAuthInstance.get(AUTH_END_POINT.TOKEN)

  return (await res.data.json()) as GetAccessTokenResponse
}
