export type PathStatus = 'PENDING' | 'APPLICATION_PERIOD' | 'IN_PROGRESS' | 'COMPLETED'
export type PageFeature = 'LEARNING_CONTENTS' | 'QUIZ' | 'VIDEO'

export interface BasePathType {
  id: string | number
  title: string
  description: string
  thumbnail: string
  parts: BasePartType[]
}

export interface BasePartType {
  id: string | number
  title: string
  order: string | number
  page: (BasePageType | BaseVideoPageType)[]
}

export interface BasePageType {
  id: string | number
  title: string
  order: string | number
  type: Exclude<PageFeature, 'VIDEO'>
}

export interface BaseVideoPageType {
  id: string | number
  title: string
  order: string | number
  type: 'VIDEO'
  videoLength: string
}
