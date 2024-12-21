import { SocialProvider } from '../config/auth-config'
import { AUTH_END_POINT } from '../config/auth-config'

export async function oauthLogin(provider: SocialProvider) {
  const baseUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}${AUTH_END_POINT.SOCIAL_LOGIN(provider)}`
  window.location.href = baseUrl
}
