import { http, HttpHandler, HttpResponse, StrictRequest } from 'msw'

export interface User {
  email: string
  nickname: string
  profileUrl: string | null
}

const allUser: Map<string, User> = new Map()

allUser.set('jane@naver.com', { nickname: 'jane', email: 'jane@naver.com', profileUrl: null })
allUser.set('zero@naver.com', { nickname: 'zero', email: 'zero@naver.com', profileUrl: null })
allUser.set('zoey@naver.com', { nickname: 'zoey', email: 'zoey@naver.com', profileUrl: null })

export const memberHandlers: HttpHandler[] = [
  http.post('/user/sign-up', async ({ request }: { request: StrictRequest<User> }) => {
    const { email, nickname } = await request.json()
    allUser.set(email, { email, nickname, profileUrl: null })

    return HttpResponse.json('ok', {
      headers: {
        'Set-Cookie1': 'Access-Token=access-token-value;HttpOnly;Path=/;Max-Age=3600',
        'Set-Cookie2': 'Refresh-Token=refresh-token-value;HttpOnly;Path=/;Max-Age=604800'
      }
    })
  }),

  http.post('/user/sign-in', async ({ request }: { request: StrictRequest<User> }) => {
    const { email } = await request.json()
    const selectUser = allUser.get(email)

    if (!selectUser) {
      return HttpResponse.json(null, { status: 401, statusText: '없는 유저를 조회하였습니다.' })
    }

    return HttpResponse.json(
      { user: selectUser },
      {
        headers: {
          'Set-Cookie1': 'Access-Token=access-token-value;HttpOnly;Path=/;Max-Age=3600',
          'Set-Cookie2': 'Refresh-Token=refresh-token-value;HttpOnly;Path=/;Max-Age=604800'
        }
      }
    )
  }),

  http.post('/user/sign-out', () => {
    console.info('로그아웃')
    return new HttpResponse('ok', {
      headers: {
        'Set-Cookie1': 'Access-Token=;HttpOnly;Path=/;Max-Age=0',
        'Set-Cookie2': 'Refresh-Token=;HttpOnly;Path=/;Max-Age=0'
      }
    })
  })
]
