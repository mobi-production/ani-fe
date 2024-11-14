import { http, HttpHandler, HttpResponse } from 'msw'
import { pathIntroduce } from '../data/path'

export const pathHandlers: HttpHandler[] = [
  http.get('/path/:id', () => {
    return HttpResponse.json(pathIntroduce)
  })
]
