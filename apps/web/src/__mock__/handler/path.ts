import { http, HttpHandler, HttpResponse } from 'msw'
import { pathIntroduce } from '../data/path'
import { FEEDBACK_CATEGORY, mockFeedbackList } from '../data/feedback'

export const pathHandlers: HttpHandler[] = [
  http.get('/path/:id', () => {
    return HttpResponse.json(pathIntroduce)
  }),
  http.get('/path/:pathId/feedback', ({ params }) => {
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

    return HttpResponse.json(targetPathFeedbackList, { status: 200 })
  }),
  http.get('/part/:partId/feedback', ({ params }) => {
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
        partFeedbackQuestions: [...targetPartFeedbackList.questions],
        mentoFeedbackQuestions: [...targetMentoFeedbackList.questions],
        pairFeedbackQuestions: [...targetPairFeedbackList.questions]
      },
      { status: 200 }
    )
  })
]
