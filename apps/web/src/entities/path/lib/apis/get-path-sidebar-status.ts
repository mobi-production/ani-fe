import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import { QUERY_KEYS } from '@/shared/config/constants/querykey'
import { GetPathSidebarStatusParamsType, GetPathSidebarStatusResponseType } from '../types/apis'
import { END_POINT } from '@/shared/config/constants/end-point'

/**
 * 패스 사이드바 상태 데이터를 조회하는 함수
 * @param pathId 패스 ID
 * @returns 패스 사이드바 상태 데이터
 */
export async function getPathSidebarStatus(
  params: GetPathSidebarStatusParamsType
): Promise<GetPathSidebarStatusResponseType> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + END_POINT.PATH.PATH_SIDEBAR_STATUS(params.pathId),
    {
      method: HTTP_METHODS.GET,
      headers: HTTP_HEADERS.JSON,
      cache: 'no-store',
      next: {
        tags: [...QUERY_KEYS.PATH.SIDEBAR_STATUS(params.pathId)] as string[]
      }
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch path sidebar status')
  }

  return await response.json()
}
