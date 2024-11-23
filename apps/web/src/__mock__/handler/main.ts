import { http, HttpHandler, HttpResponse } from 'msw'
import { mainData } from '../data/main'
import { withDelay } from '../utils/withDelay'
import type { GetMainResponse } from '../types/main'

const MOCK_SERVER_RESPONSE_DELAY = 500

export const mainHandlers: HttpHandler[] = [
  http.get<never, never, GetMainResponse>(
    `/main`,
    withDelay(MOCK_SERVER_RESPONSE_DELAY, () => {
      return HttpResponse.json(mainData, { status: 200 })
    })
  )
]
