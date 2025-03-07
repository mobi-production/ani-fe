export type SocialProvider = 'discord'

export const AUTH_END_POINT = {
  SOCIAL_LOGIN: (provider: SocialProvider) => '/api/v1/auth/social/' + provider + '?type=ani',
  SOCIAL_CALLBACK: (provider: SocialProvider) => '/api/v1/auth/social/' + provider + '/callback',
  EMAIL_EXISTS: '/api/v1/auth/email-exists',
  LOCAL_SIGNUP: '/api/v1/auth',
  LOCAL_LOGIN: '/api/v1/auth/login',
  TOKEN: '/api/v1/auth/token',
  REFRESH_TOKEN: '/api/v1/auth/refresh',
  ROLE: '/api/v1/auth/role',
  LOGOUT: '/api/v1/auth/logout'
}

export const AUTH_QUERY_KEYS = {
  AUTH: 'auth',
  REFRESH_TOKEN: 'refreshToken',
  GET_ACCESS_TOKEN: 'getAccessToken',
  LOGIN: 'login',
  SIGNUP: 'signup',
  ROLE: 'role'
}
