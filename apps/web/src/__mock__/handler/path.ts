import { http, HttpHandler, HttpResponse } from 'msw'
import {
  pathApplyCancelMock,
  pathApplyMock,
  pathIntroduceMock,
  pathLoadMock,
  pathPageMock,
  pathSidebarStatusMock
} from '../data/path'
import { FEEDBACK_CATEGORY, MOCK_MENTO, MOCK_USER, mockFeedbackList } from '../data/feedback'
import { withDelay } from '../utils/withDelay'
import {
  ErrorResponseType,
  GetPartFeedabckParamsType,
  GetPartFeedbackResponseType,
  GetPathFeedbackParamsType,
  GetPathFeedbackResponseType,
  PostFeedabckResponseType,
  PostPartFeedbackParamsType,
  PostPartFeedbackRequestType,
  PostPathFeedbackParamsType,
  PostPathFeedbackRequestType
} from '../types/feedback'
import {
  GetPathIntroduceParamsType,
  GetPathIntroduceResponseType
} from '@/views/path/api/get-path-introduce'
import {
  GetPathStatusParamsType,
  GetPathStatusResponseType
} from '@/views/path/api/get-path-status'
import { GetPathPageParamsType, GetPathPageResponseType } from '@/views/path/api/get-path-page'
import { GetPathLoadParamsType, GetPathLoadResponseType } from '@/views/path/api/get-path-load'
import {
  PostPathApplyParamsType,
  PostPathApplyResponseType
} from '@/features/path/api/post-path-apply'
import {
  DeletePathApplyParamsType,
  DeletePathApplyCancelResponseType
} from '@/features/path/api/delete-path-apply-cancle'

const MOCK_SERVER_RESPONSE_DELAY = 3000

export const pathHandlers: HttpHandler[] = [
  // 패스 상세 조회
  http.get<GetPathIntroduceParamsType, never, GetPathIntroduceResponseType | ErrorResponseType>(
    '/path/:pathId',
    ({ params }) => {
      const { pathId } = params
      return HttpResponse.json({
        status: 200,
        data: pathIntroduceMock(pathId)
      })
    }
  ),
  // 패스 피드백 조회
  http.get<GetPathFeedbackParamsType, never, GetPathFeedbackResponseType | ErrorResponseType>(
    '/path/:pathId/feedback',
    withDelay(MOCK_SERVER_RESPONSE_DELAY, ({ params }) => {
      const { pathId } = params
      console.log('pathId:', pathId)

      const targetPathFeedbackList = mockFeedbackList.find(
        (feedback) => feedback.courseId === pathId && feedback.type === FEEDBACK_CATEGORY.PART
      )

      if (!targetPathFeedbackList) {
        return HttpResponse.json(
          { status: 404, message: '존재하지 않는 패스입니다.' },
          {
            status: 404
          }
        )
      }

      return HttpResponse.json(
        {
          courseId: pathId,
          courseName: targetPathFeedbackList.courseName,
          pathFeedback: [...targetPathFeedbackList.questions]
        },
        { status: 200 }
      )
    })
  ),
  // 파트 피드백 조회 (파트, 멘토, 페어)
  http.get<GetPartFeedabckParamsType, never, GetPartFeedbackResponseType | ErrorResponseType>(
    '/part/:partId/feedback',
    withDelay(MOCK_SERVER_RESPONSE_DELAY, ({ params }) => {
      const { partId } = params
      console.log('partId:', partId)

      const targetPartFeedbackList = mockFeedbackList.find(
        (feedback) => feedback.courseId === partId && feedback.type === FEEDBACK_CATEGORY.PART
      )
      const targetMentoFeedbackList = mockFeedbackList.find(
        (feedback) => feedback.courseId === partId && feedback.type === FEEDBACK_CATEGORY.MENTO
      )
      const targetPairFeedbackList = mockFeedbackList.find(
        (feedback) => feedback.courseId === partId && feedback.type === FEEDBACK_CATEGORY.PAIR
      )

      if (!targetPartFeedbackList || !targetMentoFeedbackList || !targetPairFeedbackList) {
        return HttpResponse.json(
          { status: 404, message: '존재하지 않는 파트입니다.' },
          {
            status: 404
          }
        )
      }

      return HttpResponse.json(
        {
          courseId: partId,
          courseName: targetPartFeedbackList.courseName,
          partFeedback: [...targetPartFeedbackList.questions],
          mentoFeedback: [...targetMentoFeedbackList.questions],
          pairFeedback: [...targetPairFeedbackList.questions]
        },
        { status: 200 }
      )
    })
  ),
  http.post<
    PostPathFeedbackParamsType,
    PostPathFeedbackRequestType,
    PostFeedabckResponseType | ErrorResponseType
  >(
    '/path/:pathId/feedback',
    withDelay(MOCK_SERVER_RESPONSE_DELAY, async ({ params, request }) => {
      try {
        const { pathId } = params
        console.log('pathId:', pathId)

        const { answers } = await request.json()
        console.log('패스 피드백 제출:', answers)

        if (!answers.length) {
          return HttpResponse.json(
            { status: 400, message: '피드백 내용이 필요합니다.' },
            { status: 400 }
          )
        }

        return HttpResponse.json(
          { status: 200, message: '피드백이 성공적으로 제출되었습니다.' },
          { status: 200 }
        )
      } catch (error) {
        return HttpResponse.json(
          {
            status: 500,
            message: '서버 오류가 발생했습니다.'
          },
          { status: 500 }
        )
      }
    })
  ),
  http.post<
    PostPartFeedbackParamsType,
    PostPartFeedbackRequestType,
    PostFeedabckResponseType | ErrorResponseType
  >(
    '/part/:partId/feedback',
    withDelay(MOCK_SERVER_RESPONSE_DELAY, async ({ params, request }) => {
      try {
        const { partId } = params
        console.log('pathId:', partId)

        const { partFeedback, mentoFeedback, pairFeedback } = await request.json()
        console.log('파트 피드백 제출:', partFeedback)
        console.log('멘토 피드백 제출:', mentoFeedback)
        console.log('페어 피드백 제출:', pairFeedback)

        if (!MOCK_MENTO.includes(mentoFeedback.mentoId)) {
          return HttpResponse.json(
            { status: 400, message: '존재하지 않는 멘토입니다.' },
            { status: 400 }
          )
        }

        const evaluatedUsers = pairFeedback.map((user) => user.userId)
        if (!evaluatedUsers.every((user) => MOCK_USER.includes(user))) {
          return HttpResponse.json(
            { status: 400, message: '존재하지 않는 사용자입니다.' },
            { status: 400 }
          )
        }

        return HttpResponse.json(
          { status: 200, message: '피드백이 성공적으로 제출되었습니다.' },
          { status: 200 }
        )
      } catch (error) {
        return HttpResponse.json(
          {
            status: 500,
            message: '서버 오류가 발생했습니다.'
          },
          { status: 500 }
        )
      }
    })
  ),
  // 패스 사이드바 상태 조회
  http.get<GetPathStatusParamsType, never, GetPathStatusResponseType | ErrorResponseType>(
    '/path/:pathId/status',
    withDelay(MOCK_SERVER_RESPONSE_DELAY, ({ params }) => {
      const { pathId } = params
      return HttpResponse.json({ status: 200, data: pathSidebarStatusMock(pathId) })
    })
  ),

  // 패스 페이지 조회
  http.get<GetPathPageParamsType, never, GetPathPageResponseType | ErrorResponseType>(
    '/path/:pathId/detail',
    withDelay(MOCK_SERVER_RESPONSE_DELAY, async ({ params, request }) => {
      const { pathId } = params

      const url = new URL(request.url)
      const partId = url.searchParams.get('partId')
      const pageId = url.searchParams.get('pageId')

      if (!pathId || !partId || !pageId) {
        return HttpResponse.json({ status: 400, message: '잘못된 요청입니다.' }, { status: 400 })
      }

      return HttpResponse.json({ status: 200, data: pathPageMock })
    })
  ),

  // 패스 로드 조회
  http.get<GetPathLoadParamsType, never, GetPathLoadResponseType | ErrorResponseType>(
    '/path/:pathId/load',
    withDelay(MOCK_SERVER_RESPONSE_DELAY, ({ params }) => {
      const { pathId } = params
      return HttpResponse.json({ status: 200, data: pathLoadMock(pathId) })
    })
  ),

  // 패스 신청
  http.post<never, PostPathApplyParamsType, PostPathApplyResponseType | ErrorResponseType>(
    '/path/:pathId/apply',
    withDelay(MOCK_SERVER_RESPONSE_DELAY, async ({ params }) => {
      const { pathId } = params
      return HttpResponse.json({ status: 200, data: pathApplyMock(pathId) })
    })
  ),

  // 패스 신청 취소
  http.delete<
    DeletePathApplyParamsType,
    never,
    DeletePathApplyCancelResponseType | ErrorResponseType
  >(
    '/path/:pathId/apply',
    withDelay(MOCK_SERVER_RESPONSE_DELAY, async ({ params }) => {
      const { pathId } = params
      return HttpResponse.json({ status: 200, data: pathApplyCancelMock(pathId) })
    })
  )
]
