import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import { END_POINT } from '@/views/mypage/config/apis'
import { PutMyPageProfileRequestType, PutMyPageProfileResponse } from '../model/apis'

export async function putMyProfile(userData: PutMyPageProfileRequestType) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + END_POINT.MYPAGE.MY_PROFILE, {
      method: HTTP_METHODS.PUT,
      headers: HTTP_HEADERS.JSON,
      body: JSON.stringify(userData)
    })

    console.log('response', response)
    if (!response.ok) {
      console.error('마이프로필 데이터 수정 중 오류 발생:', response.statusText)
      return null
    }

    const data: PutMyPageProfileResponse = await response.json()
    return data
  } catch (error) {
    console.error('마이프로필 데이터 수정 에러', error)
    return null
  }
}
