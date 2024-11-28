import { User } from '@/__mock__/handler/member'
import { PartType } from '@/shared/types/common'
import { ServerDrivenComponentType } from '@repo/sdu/index'

export type GetPathDetailParamsType = {
  pathId: string
}

export type GetPathDetailResponseType = {
  status: number
  data: {
    isSubscribed: boolean
    status: 'PENDING' | 'APPROVED' | 'REJECTED'
    pathId: number | string
    startDate: string | Date
    endDate: string | Date
    level: string
    maxStudent: number
    recruitStartDate: string | Date
    recruitEndDate: string | Date
    announcementDate: string | Date
    path: {
      title: string
      description: string
      thumbnail: string
      content: ServerDrivenComponentType[]
    }
    parts: PartType[]
  }
}

export type GetPathPageParamsType = {
  pathId: string
  partId: string
  pageId: string
}

type QuizType = {
  quizs: {
    question: string
    answers: string[]
    correctAnswer: string
  }[]
}

export type GetPathPageResponseType = {
  status: number
  data: {
    partName: string
    pageName: string
  } & (
    | {
        type: 'LEARNING_CONTENTS'
        content: ServerDrivenComponentType[]
      }
    | {
        type: 'QUIZ'
        quiz: QuizType
      }
  )
}

export type GetPathSidebarStatusParamsType = {
  pathId: string
}

type CurriculumPageType = {
  id: number
  title: string
  checked: boolean
} & (
  | {
      type: 'LEARNING_CONTENTS' | 'QUIZ'
    }
  | {
      id: number
      title: string
      type: 'VIDEO'
      videoLength: string
    }
)

type CurriculumPartType = {
  id: number
  order: number
  title: string
  page: CurriculumPageType[]
}

type CurriculumType = {
  parts: CurriculumPartType[]
}

export type GetPathSidebarStatusResponseType = {
  status: number
  data: {
    path: {
      id: number | string
      title: string
      thumbnail: string
      startDate: string | Date
      endDate: string | Date
      progress: number
      status: 'IN_PROGRESS' | 'COMPLETED' | 'PENDING_REVIEW'
      mentors: User[]
      crews: User[]
    }
    curriculum: CurriculumType
    quiz: CurriculumType
  }
}

export type GetPathLoadParamsType = {
  pathId: string
}

export type GetPathLoadResponseType = {
  status: number
  data: {
    pathId: string
    partId: string
    pageId: string
  }
}
