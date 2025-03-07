import {
  ErrorResponseType,
  FeedbackAnswerType,
  PostFeedabckResponseType
} from '@/__mock__/types/feedback'
import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'

/**
 * 패스 피드백을 제출하는 함수
 * @param pathId 제출할 패스 ID
 * @param answers 피드백 답변 리스트
 * @returns 서버 응답 데이터 또는 null
 */
export async function postPathFeedback(
  pathId: string,
  answers: FeedbackAnswerType[]
): Promise<PostFeedabckResponseType | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/path/${pathId}/feedback`, {
      method: HTTP_METHODS.POST,
      headers: HTTP_HEADERS.JSON,
      body: JSON.stringify({ answers })
    })

    if (!response.ok) {
      const errorData: ErrorResponseType = await response.json()
      console.error('패스 피드백 제출 중 오류 발생:', errorData.message)
      return null
    }

    const data: PostFeedabckResponseType = await response.json()
    return data
  } catch (error) {
    console.error('패스 피드백 제출 중 서버 오류 발생:', error)
    return null
  }
}
