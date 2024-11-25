import { MyPageData } from '@/__mock__/types/mypage'
import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'

/**
 * 마이페이지 데이터를 조회하는 함수
 * @returns 서버 응답 데이터 또는 null
 */
export async function getMyPageData(): Promise<MyPageData | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mypage`, {
      method: HTTP_METHODS.GET,
      headers: HTTP_HEADERS.JSON
    })

    if (!response.ok) {
      console.error('마이페이지 데이터 조회 중 오류 발생:', response.statusText)
      return null
    }

    const data: MyPageData = await response.json()
    return data
  } catch (error) {
    console.error('마이페이지 데이터 조회 에러', error)
    return null
  }
}
