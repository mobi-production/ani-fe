import { http, HttpHandler, HttpResponse } from 'msw'
import { withDelay } from '../utils/withDelay'
import { myPageData } from '../data/mypage'
import type { GetMyPageResponse } from '../types/mypage'

const MOCK_SERVER_RESPONSE_DELAY = 500

export const myPageHandlers: HttpHandler[] = [
  http.get<never, never, GetMyPageResponse>(
    `/mypage`,
    withDelay(MOCK_SERVER_RESPONSE_DELAY, () => {
      return HttpResponse.json(myPageData, { status: 200 })
    })
  )
]
