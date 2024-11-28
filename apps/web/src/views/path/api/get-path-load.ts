import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'

export type GetPathLoadParamsType = {
  pathId: string
}

export type GetPathLoadResponseType = {
  status: number
  data: {
    pathId: string
    partId: string
    pageId: string
  }
}

/**
 * 패스 로드 데이터를 조회하는 함수
 * @param pathId 패스 ID
 * @returns 패스 로드 데이터
 */
export async function getPathLoad({
  pathId
}: GetPathLoadParamsType): Promise<GetPathLoadResponseType> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/path/${pathId}/load`, {
    method: HTTP_METHODS.GET,
    headers: HTTP_HEADERS.JSON,
    cache: 'no-store'
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch path load. Status: ${response.status}`)
  }

  return response.json()
}
