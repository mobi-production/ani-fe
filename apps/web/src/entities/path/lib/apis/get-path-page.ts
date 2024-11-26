import { GetPathPageParamsType, GetPathPageResponseType } from '../types/apis'
import { END_POINT } from '@/shared/config/constants/end-point'
import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import { QUERY_KEYS } from '@/shared/config/constants/querykey'

/**
 * 패스 페이지 데이터를 조회하는 함수
 * @param params 패스 페이지 파라미터
 * @returns 패스 페이지 데이터
 */
export async function getPathPage(params: GetPathPageParamsType): Promise<GetPathPageResponseType> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      END_POINT.PATH.PATH_PAGE(params.pathId, params.partId, params.pageId),
    {
      method: HTTP_METHODS.GET,
      headers: HTTP_HEADERS.JSON,
      cache: 'no-store',
      next: {
        tags: [
          ...QUERY_KEYS.PATH.PATH_PAGE(params.pathId, params.partId, params.pageId)
        ] as string[]
      }
    }
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch path page data. Status: ${response.status}`)
  }

  return await response.json()
}
