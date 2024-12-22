import { AUTH_END_POINT } from '../config/auth-config'

export const signOut = async () => {
  const baseURL = `${process.env.NEXT_PUBLIC_CLIENT_URL}${AUTH_END_POINT.LOGOUT}`
  await fetch(baseURL)
}
