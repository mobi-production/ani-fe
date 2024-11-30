import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import { CurriculumType, PathStatusType } from '@/entities/path/model/apis'

type Data = {
  path: PathStatusType
  curriculum: CurriculumType
  quiz: CurriculumType
}

export type GetPathStatusParamsType = {
  pathId: string
}

export type GetPathStatusResponseType = {
  status: number
  data: Data
}

/**
 * 패스 사이드바 상태 데이터를 조회하는 함수
 * @param pathId 패스 ID
 * @returns 패스 사이드바 상태 데이터
 */
export async function getPathStatus(
  params: GetPathStatusParamsType
): Promise<GetPathStatusResponseType> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/path/${params.pathId}/status`, {
    method: HTTP_METHODS.GET,
    headers: HTTP_HEADERS.JSON,
    cache: 'no-store',
    next: {
      tags: ['path', params.pathId, 'status']
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch path sidebar status')
  }

  return await response.json()
}
