import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import type { GetMyPageResponse } from '../model/apis'
import type { MyPageData } from '@/__mock__/types/mypage'
import { END_POINT } from '../config/apis'

/**
 * 마이페이지 데이터를 조회하는 함수
 * @returns 서버 응답 데이터 또는 null
 */
export async function getMyPageData(): Promise<GetMyPageResponse> {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + END_POINT.MYPAGE.MAIN, {
      method: HTTP_METHODS.GET,
      headers: HTTP_HEADERS.JSON
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const data: MyPageData = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching mypage data:', error)
    throw error
  }
}
