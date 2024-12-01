import { http, HttpHandler, HttpResponse, StrictRequest } from 'msw'
import type { User } from '../types/auth'
import { END_POINT } from '@/shared/config/constants/end-point'

const correctUser: Map<User['email'], User> = new Map()
correctUser.set('creme@naver.com', {
  email: 'creme@naver.com',
  nickname: 'cream',
  password: 'creme1234@',
  profileUrl: ''
})

export const authHandlers: HttpHandler[] = [
  http.post(
    END_POINT.AUTH.LOGIN,
    async ({ request }: { request: StrictRequest<{ email: string; password: string }> }) => {
      const { email, password } = await request.json()
      const user = correctUser.get(email)

      if (!user) {
        return HttpResponse.json(
          { message: '사용자를 찾을 수 없습니다.' },
          { status: 404, statusText: 'Not Found' }
        )
      }

      if (password !== 'creme1234@') {
        return HttpResponse.json(
          { message: '비밀번호가 일치하지 않습니다.' },
          { status: 401, statusText: 'Unauthorized' }
        )
      }

      return HttpResponse.json(
        { message: '로그인에 성공하였습니다.', status: 200 },
        { status: 200 }
      )
    }
  ),
  http.post(END_POINT.AUTH.SIGNUP, async ({ request }: { request: StrictRequest<User> }) => {
    const { email, nickname, password, profileUrl } = await request.json()

    if (correctUser.has(email)) {
      return HttpResponse.json(
        { message: '이미 존재하는 이메일입니다.' },
        { status: 409, statusText: 'Conflict' }
      )
    }

    if (correctUser.has(nickname)) {
      return HttpResponse.json(
        { message: '이미 존재하는 닉네임입니다.' },
        { status: 409, statusText: 'Conflict' }
      )
    }

    correctUser.set(email, { email, nickname, password, profileUrl })

    return HttpResponse.json(
      { message: '회원가입에 성공하였습니다.', status: 201 },
      { status: 201 }
    )
  })
]
