export type PathType = {
  id: string | number
  title: string
  description: string
  thumbnail: string
  parts: PartType[]
}

export type PartType = {
  id: string | number
  title: string
  order: string | number
  page: PageType[]
}

type PageFeature = 'LEARNING_CONTENTS' | 'QUIZ' | 'VIDEO'

export type PageType =
  | {
      id: string | number
      title: string
      order: string | number
      type: Exclude<PageFeature, 'VIDEO'>
    }
  | {
      id: string | number
      title: string
      order: string | number
      type: 'VIDEO'
      videoLength: string
    }
