import { http, HttpHandler, HttpResponse } from 'msw'
import { withDelay } from '../utils/withDelay'
import { myPageData, myPageProfileData } from '../data/mypage'
import type {
  GetMyPageProfileResponse,
  GetMyPageResponse,
  PutMyPageProfileParamsType,
  PutMyPageProfileRequestType,
  PutMyPageProfileResponse
} from '../types/mypage'

const MOCK_SERVER_RESPONSE_DELAY = 500

export const myPageHandlers: HttpHandler[] = [
  http.get<never, never, GetMyPageResponse>(
    `/mypage`,
    withDelay(MOCK_SERVER_RESPONSE_DELAY, () => {
      return HttpResponse.json(myPageData, { status: 200 })
    })
  ),
  http.get<never, never, GetMyPageProfileResponse>(
    `/my-profile`,
    withDelay(MOCK_SERVER_RESPONSE_DELAY, () => {
      return HttpResponse.json(myPageProfileData, { status: 200 })
    })
  ),
  http.put<PutMyPageProfileParamsType, PutMyPageProfileRequestType, PutMyPageProfileResponse>(
    `/my-profile`,
    withDelay(MOCK_SERVER_RESPONSE_DELAY, async ({ params, request }) => {
      try {
        const { userId } = params
        console.log('userId:', userId)

        const body = await request.json()
        console.log('유저 데이터 수정:', body)

        return HttpResponse.json(
          { status: 200, message: '프로필 수정이 완료되었습니다.' },
          { status: 200 }
        )
      } catch (error) {
        return HttpResponse.json(
          { status: 500, message: '프로필 수정에 실패했습니다.' },
          { status: 500 }
        )
      }
    })
  )
]
