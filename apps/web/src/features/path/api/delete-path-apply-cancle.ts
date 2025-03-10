import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import { END_POINT } from '../config/path-config'
import { ErrorResponseType } from '@/__mock__/types/feedback'

export type DeletePathApplyParamsType = {
  pathId: string
  reason: string
}

export type DeletePathApplyCancelResponseType = {
  status: number
  data: {
    pathId: string | number
  }
}

export async function deletePathApplyCancel({
  pathId,
  reason
}: DeletePathApplyParamsType): Promise<DeletePathApplyCancelResponseType | ErrorResponseType> {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + END_POINT.PATH_APPLY_CANCEL(pathId),
      {
        method: HTTP_METHODS.DELETE,
        headers: HTTP_HEADERS.JSON,
        body: JSON.stringify({ reason })
      }
    )

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message)
    }

    const data: DeletePathApplyCancelResponseType = await response.json()
    return data
  } catch (error) {
    console.error('패스 신청 취소 에러', error)
    return {
      status: 500,
      data: {
        pathId: ''
      }
    }
  }
}
