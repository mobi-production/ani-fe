import { PartType, PageType } from '@/shared/types/common'

type StatusPageType = PageType & {
  isSuccess: boolean
}

type StatusPartType = PartType & {
  page: StatusPageType[]
}

export type PathDetail = {
  parts: StatusPartType[]
}
