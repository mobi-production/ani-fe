import type { LoginRequestType } from '@/__mock__/types/auth'
import { AUTH_END_POINT } from '@/features/auth/config/auth-config'
import { axiosAuthInstance } from '@/shared/config/api/axios'

export async function localLogin({ email, password }: LoginRequestType) {
  const response = await axiosAuthInstance.post(AUTH_END_POINT.LOCAL_LOGIN, {
    email,
    password
  })

  return await response.data.json()
}
