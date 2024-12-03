import type { LoginRequestType, AuthResponse } from '@/__mock__/types/auth'
import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import { END_POINT } from '../config/auth-config'

export async function login(loginData: LoginRequestType) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + END_POINT.AUTH.LOGIN, {
      method: HTTP_METHODS.POST,
      headers: HTTP_HEADERS.JSON,
      body: JSON.stringify(loginData)
    })

    console.log('response', response)
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message)
    }

    const data: AuthResponse = await response.json()
    return data
  } catch (error) {
    console.error('로그인 에러', error)
    return null
  }
}
