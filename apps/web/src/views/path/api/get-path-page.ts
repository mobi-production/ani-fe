import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import { ServerDrivenComponentType } from '@repo/sdu/index'
import { PathPageType, QuizType } from '@/entities/path/model/domain'

export type GetPathPageParamsType = {
  pathId: string
  partId: string
  pageId: string
}

export type GetPathPageResponseType = {
  status: number
  data: PathPageType
}

/**
 * 패스 페이지 데이터를 조회하는 함수
 * @param params 패스 페이지 파라미터
 * @returns 패스 페이지 데이터
 */
export async function getPathPage({
  pageId,
  partId,
  pathId
}: GetPathPageParamsType): Promise<GetPathPageResponseType> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/path/${pathId}/detail?partId=${partId}&pageId=${pageId}`,
    {
      method: HTTP_METHODS.GET,
      headers: HTTP_HEADERS.JSON,
      cache: 'no-store',
      next: {
        tags: ['path', pathId, 'detail', partId, pageId]
      }
    }
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch path page data. Status: ${response.status}`)
  }

  return await response.json()
}
