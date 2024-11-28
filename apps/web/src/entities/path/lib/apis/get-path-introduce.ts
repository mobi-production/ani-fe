import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import { QUERY_KEYS } from '@/shared/config/constants/querykey'
import { GetPathDetailResponseType } from '../types/apis'
import { END_POINT } from '@/shared/config/constants/end-point'

/**
 * 패스 소개 데이터를 조회하는 함수
 * @param pathId 패스 ID
 * @returns 패스 소개 데이터
 */
export async function getPathIntroduce(
  pathId: string | number
): Promise<GetPathDetailResponseType> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + END_POINT.PATH.INTRODUCE(pathId.toString()),
    {
      method: HTTP_METHODS.GET,
      headers: HTTP_HEADERS.JSON,
      cache: 'no-store',
      next: {
        tags: [...QUERY_KEYS.PATH.INTRODUCE(pathId.toString())] as string[]
      }
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch path introduce')
  }

  return await response.json()
}
