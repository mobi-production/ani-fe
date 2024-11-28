import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import { BasePartType, PathStatus } from '@/shared/types/path'
import { ServerDrivenComponentType } from '@repo/sdu/index'

type Data = {
  isSubscribed: boolean
  status: PathStatus
  pathId: number | string
  startDate: string | Date
  endDate: string | Date
  level: string
  maxStudent: number
  recruitStartDate: string | Date
  recruitEndDate: string | Date
  announcementDate: string | Date
  path: {
    title: string
    description: string
    thumbnail: string
    content: ServerDrivenComponentType[]
  }
  parts: BasePartType[]
}

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
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/path/${pathId}`, {
    method: HTTP_METHODS.GET,
    headers: HTTP_HEADERS.JSON,
    cache: 'no-store',
    next: {
      tags: ['path', pathId]
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch path introduce')
  }

  return await response.json()
}
