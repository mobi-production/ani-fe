import { MainData } from '@/__mock__/data/main'
import { HTTP_HEADERS } from '@/shared/config/constants/http'

/**
 * 메인 페이지 데이터를 조회하는 함수
 * @returns 서버 응답 데이터 또는 null
 */
export async function getMainData(): Promise<MainData | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/main`, {
      method: 'GET',
      headers: HTTP_HEADERS.JSON
    })

    if (!response.ok) {
      console.error('메인 데이터 조회 중 오류 발생:', response.statusText)
      return null
    }

    const data: MainData = await response.json()
    return data
  } catch (error) {
    console.error('메인 데이터 조회 에러', error)
    return null
  }
}
