import { http, HttpHandler, HttpResponse } from 'msw'
import { withDelay } from '../utils/withDelay'
import { myPageData, myPageProfileData } from '../data/mypage'
import type {
  GetMyPageProfileResponse,
  GetMyPageResponse,
  PutMyPageProfileRequestType,
  PutMyPageProfileResponse
} from '../types/mypage'
import { END_POINT } from '@/shared/config/constants/end-point'

const MOCK_SERVER_RESPONSE_DELAY = 500

export const myPageHandlers: HttpHandler[] = [
  http.get<never, never, GetMyPageResponse>(
    END_POINT.MYPAGE.MAIN,
    withDelay(MOCK_SERVER_RESPONSE_DELAY, () => {
      return HttpResponse.json(myPageData, { status: 200 })
    })
  ),
  http.get<never, never, GetMyPageProfileResponse>(
    END_POINT.MYPAGE.MY_PROFILE,
    withDelay(MOCK_SERVER_RESPONSE_DELAY, () => {
      return HttpResponse.json(myPageProfileData, { status: 200 })
    })
  ),
  http.put<never, PutMyPageProfileRequestType, PutMyPageProfileResponse>(
    END_POINT.MYPAGE.MY_PROFILE,
    withDelay(MOCK_SERVER_RESPONSE_DELAY, async ({ request }) => {
      try {
        const body: PutMyPageProfileRequestType = await request.json()
        const { userId, nickname, password, passwordConfirmation } = body

        if (!userId) {
          return HttpResponse.json(
            { status: 400, message: '유저 아이디가 존재하지 않습니다.' },
            { status: 400 }
          )
        }

        if (password !== passwordConfirmation) {
          return HttpResponse.json(
            { status: 400, message: '비밀번호와 비밀번호 확인이 일치하지 않습니다.' },
            { status: 400 }
          )
        }

        if (!nickname) {
          return HttpResponse.json(
            { status: 400, message: '닉네임이 존재하지 않습니다.' },
            { status: 400 }
          )
        }

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
