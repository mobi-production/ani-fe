import type { SignupRequestType, AuthResponse } from '@/__mock__/types/auth'
import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import { END_POINT } from '../config/auth-config'

export async function signup(signupData: SignupRequestType) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_AUTH_URL + END_POINT.AUTH.SIGNUP, {
      method: HTTP_METHODS.POST,
      headers: HTTP_HEADERS.JSON,
      body: JSON.stringify({ ...signupData, type: 'ani' })
    })

    console.log('response', response)
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message)
    }

    const data: AuthResponse = await response.json()
    return data
  } catch (error) {
    console.error('회원가입 에러', error)
    return null
  }
}
