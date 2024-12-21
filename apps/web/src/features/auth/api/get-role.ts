import { AUTH_END_POINT } from '@/features/auth/config/auth-config'

export const getRole = async () => {
  const baseURL = `${process.env.NEXT_PUBLIC_AUTH_URL}${AUTH_END_POINT.ROLE}`
  const res = await fetch(baseURL)

  return (await res.json()) as { role: string }
}
