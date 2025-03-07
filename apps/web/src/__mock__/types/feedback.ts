import { LikertNumberType } from '@/widgets/feedback/config/likert-scale'
import { FeedbackQuestionType, FeedbackType } from '../data/feedback'

export type ErrorResponseType = {
  status: number
  message: string
}

// 패스 피드백 조회
export type GetPathFeedbackParamsType = {
  pathId: string
}

export type GetPathFeedbackResponseType = {
  courseId: string
  courseName: string
  pathFeedback: FeedbackQuestionType[]
}

// 파트 피드백 조회
export type GetPartFeedabckParamsType = {
  partId: string
}

export type GetPartFeedbackResponseType = {
  courseId: string
  courseName: string
  partFeedback: FeedbackQuestionType[]
  mentoFeedback: FeedbackQuestionType[]
  pairFeedback: FeedbackQuestionType[]
}

// 피드백 답변 제출 공통 타입
export type FeedbackAnswerValueType = {
  LIKERT: LikertNumberType
  OPEN_ENDED: string
}

export type FeedbackAnswerType = {
  questionId: string
  type: keyof FeedbackAnswerValueType
  value: FeedbackAnswerValueType[keyof FeedbackAnswerValueType]
}

export type PostFeedabckResponseType = {
  success: boolean
  message?: string
}

// 패스 피드백 제출
export type PostPathFeedbackParamsType = {
  pathId: string
}

export type PostPathFeedbackRequestType = {
  answers: FeedbackAnswerType[]
}

// 파트 피드백 제출
export type PostPartFeedbackParamsType = {
  partId: string
}

export type CoreFeedbackType = {
  partId: string
  answers: FeedbackAnswerType[]
}

export type MentoFeedbackType = CoreFeedbackType & {
  mentoId: string
}

export type PairFeedbackType = CoreFeedbackType & {
  userId: string
}

export type PostPartFeedbackRequestType = {
  partFeedback: CoreFeedbackType
  mentoFeedback: MentoFeedbackType
  pairFeedback: PairFeedbackType[]
}
