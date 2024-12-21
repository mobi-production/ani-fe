import type { PathDetailType, PathIntroduceType } from '../model/apis'
import { axiosInstance } from '@/shared/config/api'
import { PATH_END_POINT } from '../config/path-config'

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
  const response = await axiosInstance.get(PATH_END_POINT.INTRODUCE(pathId))

  if (response.status !== 200) {
    throw new Error('Failed to fetch path introduce')
  }

  return response.data as GetPathIntroduceResponseType
}
