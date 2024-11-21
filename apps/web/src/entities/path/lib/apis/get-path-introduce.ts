import { ErrorResponseType } from '@/__mock__/types/feedback'
import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import { PathIntroduceResponseType } from '../../model/path-introduce'

/**
 * 파트 피드백을 조회하는 함수
 * @param pathId 피드백 데이터를 조회할 파트 ID
 * @returns 서버 응답 데이터 또는 null
 */
export async function getPathIntroduce(pathId: string): Promise<PathIntroduceResponseType | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/path/${pathId}`, {
      method: HTTP_METHODS.GET,
      headers: HTTP_HEADERS.JSON
    })

    if (!response.ok) {
      const errorData: ErrorResponseType = await response.json()
      console.error('패스 상세 조회 중 오류 발생:', errorData.message)
      return null
    }

    const data = await response.json()
    return data
  } catch (error) {
    /**
     * TODO: 에러 핸들링 로직 추가
     */
    console.error('패스 상세 조회 에러', error)
    return null
  }
}
