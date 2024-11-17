import { http, HttpHandler, HttpResponse } from 'msw'
import { mainData } from '../data/main'

export const mainHandlers: HttpHandler[] = [
  http.get('/main', () => {
    return HttpResponse.json(mainData)
  })
]
