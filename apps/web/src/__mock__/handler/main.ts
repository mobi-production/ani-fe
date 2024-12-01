import { http, HttpHandler, HttpResponse } from 'msw'
import { mainData } from '../data/main'
import { withDelay } from '../utils/withDelay'
import { GetMainResponse } from '@/views/main/model/apis'
import { END_POINT } from '@/views/main/config/main-config'

const MOCK_SERVER_RESPONSE_DELAY = 500

export const mainHandlers: HttpHandler[] = [
  http.get<never, never, GetMainResponse>(
    END_POINT.MAIN,
    withDelay(MOCK_SERVER_RESPONSE_DELAY, () => {
      return HttpResponse.json(mainData, { status: 200 })
    })
  )
]
