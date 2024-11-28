import { BasePageType, BaseVideoPageType } from '@/shared/types/path'

export type UserType = {
  email: string
  nickname: string
  profileUrl: string | null
}

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

export type QuizType = {
  quizs: {
    question: string
    answers: string[]
    correctAnswer: string
  }[]
}
