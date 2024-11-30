import { PathStatus } from '@/shared/types/path'
import { ServerDrivenComponentType } from '@repo/sdu'

// 패스 소개 데이터 타입
export type PathIntroduceType = {
  isSubscribed: boolean
  status: PathStatus
  pathId: number | string
  startDate: string | Date
  endDate: string | Date
  level: string
  maxStudent: number
  recruitStartDate: string | Date
  recruitEndDate: string | Date
  announcementDate: string | Date
}

// 패스 상세 데이터 타입
export type PathDetailType = {
  title: string
  description: string
  thumbnail: string
  content: ServerDrivenComponentType[]
}
