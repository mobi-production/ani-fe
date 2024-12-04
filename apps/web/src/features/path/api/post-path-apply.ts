import type { AuthResponse } from '@/__mock__/types/auth'
import { HTTP_HEADERS, HTTP_METHODS } from '@/shared/config/constants/http'
import { END_POINT } from '../config/path-config'

export type PostPathApplyParamsType = {
  pathId: string
}

export type PostPathApplyResponseType = {
  status: number
  data: {
    pathId: string | number
  }
}

export async function postPathApply({
  pathId
}: PostPathApplyParamsType): Promise<PostPathApplyResponseType> {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + END_POINT.PATH_APPLY(pathId), {
      method: HTTP_METHODS.POST,
      headers: HTTP_HEADERS.JSON
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message)
    }

    const data: PostPathApplyResponseType = await response.json()
    return data
  } catch (error) {
    console.error('패스 신청 에러', error)
    return {
      status: 500,
      data: {
        pathId: ''
      }
    }
  }
}
