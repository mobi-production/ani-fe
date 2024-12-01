import type { MainData } from '@/__mock__/types/main'
import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import { END_POINT } from '../config/main-config'
import type { GetMainResponse } from '../model/apis'

/**
 * 메인 페이지 데이터를 조회하는 함수
 * @returns 서버 응답 데이터
 */
export async function getMainData(): Promise<GetMainResponse> {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + END_POINT.MAIN, {
      method: HTTP_METHODS.GET,
      headers: HTTP_HEADERS.JSON
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const data: MainData = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching main data:', error)
    throw error
  }
}
