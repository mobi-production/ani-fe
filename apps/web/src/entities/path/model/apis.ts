import { PathStatus } from '@/shared/types/path'
import { BasePageType, BaseVideoPageType } from '@/shared/types/path'
import { ServerDrivenComponentType } from '@repo/sdu'

// 사용자 관련 타입
export type UserType = {
  email: string
  nickname: string
  profileUrl: string | null
}

// 학습 경로 상태 관련 타입
export type PathStatusType = {
  id: number | string
  title: string
  thumbnail: string
  startDate: string | Date
  endDate: string | Date
  progress: number
  status: PathStatus
  mentors: UserType[]
  crews: UserType[]
}

// 커리큘럼 관련 타입
export type CurriculumPageType = {
  checked: boolean
} & (BasePageType | BaseVideoPageType)

export type CurriculumPartType = {
  id: number
  order: number
  title: string
  page: CurriculumPageType[]
}

export type CurriculumType = {
  parts: CurriculumPartType[]
}

// 퀴즈 관련 타입
export type QuizQuestion = {
  question: string
  answers: string[]
  correctAnswer: string
}

export type QuizType = {
  quizs: QuizQuestion[]
}

// 페이지 컨텐츠 타입
type BasePathPageType = {
  partName: string
  pageName: string
}

type LearningContentsPage = BasePathPageType & {
  type: 'LEARNING_CONTENTS'
  content: ServerDrivenComponentType[]
}

type QuizPage = BasePathPageType & {
  type: 'QUIZ'
  quiz: QuizType
}

export type PathPageType = LearningContentsPage | QuizPage
