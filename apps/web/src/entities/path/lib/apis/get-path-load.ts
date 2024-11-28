import { END_POINT } from '@/shared/config/constants/end-point'
import { GetPathLoadResponseType } from '../types/apis'
import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'

/**
 * 패스 로드 데이터를 조회하는 함수
 * @param pathId 패스 ID
 * @returns 패스 로드 데이터
 */
export async function getPathLoad(pathId: string): Promise<GetPathLoadResponseType> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + END_POINT.PATH.PATH_LOAD(pathId), {
    method: HTTP_METHODS.GET,
    headers: HTTP_HEADERS.JSON,
    cache: 'no-store'
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch path load. Status: ${response.status}`)
  }

  return response.json()
}
