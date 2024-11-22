import { ServerDrivenComponentType } from '@/shared/core/sdu/ServerDrivenComponent'
import { PartType } from '@/types/common'

export type GetPathIntroduceParamsType = {
  pathId: string
}

export type GetPathIntroduceResponseType = {
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
