import type { MyPageProfileData } from '@/__mock__/types/mypage'
import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import type { GetMyPageProfileResponse } from '../model/apis'
import { END_POINT } from '../config/apis'

/**
 * 마이프로필 데이터를 조회하는 함수
 * @returns 서버 응답 데이터 또는 null
 */
export async function getMyProfileData(): Promise<GetMyPageProfileResponse> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + END_POINT.MYPAGE.MY_PROFILE, {
    method: HTTP_METHODS.GET,
    headers: HTTP_HEADERS.JSON
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data: MyPageProfileData = await response.json()
  return data
}
