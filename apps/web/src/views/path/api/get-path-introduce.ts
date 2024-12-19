import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import type { PathDetailType, PathIntroduceType } from '../model/apis'

type Data = {
  path: PathDetailType
} & PathIntroduceType

export type GetPathIntroduceParamsType = {
  pathId: string
}

export type GetPathIntroduceResponseType = {
  status: number
  data: Data
}

/**
 * 패스 소개 데이터를 조회하는 함수
 * @param pathId 패스 ID
 * @returns 패스 소개 데이터
 */
export async function getPathIntroduce({
  pathId
}: GetPathIntroduceParamsType): Promise<GetPathIntroduceResponseType> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/v1/path?id=${pathId}`, {
    method: HTTP_METHODS.GET,
    headers: HTTP_HEADERS.JSON,
    cache: 'no-store'
  })

  if (!response.ok) {
    throw new Error('Failed to fetch path introduce')
  }

  return await response.json()
}
