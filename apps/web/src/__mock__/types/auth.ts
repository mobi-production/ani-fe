export type User = {
  email: string
  nickname: string
  password: string
  profileUrl?: string
}

export type LoginRequestType = {
  email: string
  password: string
}

export type AuthResponse = {
  status: number
  data: {
    accessToken: string
    refreshToken: string
  }
}

export type SignupRequestType = {
  profileUrl?: string
  email: string
  nickname: string
  password: string
}
