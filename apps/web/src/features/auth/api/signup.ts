import type { SignupRequestType, AuthResponse } from '@/__mock__/types/auth'
import { axiosAuthInstance } from '@/shared/config/api/axios'
import { AUTH_END_POINT } from '@/features/auth/config/auth-config'

export async function signup(signupData: SignupRequestType) {
  const response = await axiosAuthInstance.post(AUTH_END_POINT.LOCAL_LOGIN, {
    ...signupData,
    type: 'ani'
  })

  return (await response.data.json()) as AuthResponse
}
