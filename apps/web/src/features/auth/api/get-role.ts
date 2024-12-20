import { AUTH_END_POINT } from '@/features/auth/config/auth-config'
import { axiosAuthInstance } from '@/shared/config/api/axios'

export const getRole = async () => {
  const res = await axiosAuthInstance.get(AUTH_END_POINT.ROLE)

  return await res.data.json()
}
