type PageFeature = 'LEARNING_CONTENTS' | 'QUIZ' | 'VIDEO'

export type PathType = {
  id: string
  title: string
  description: string
  thumbnail: string
  parts: PartType[]
}

export type PartType = {
  id: number
  title: string
  order: string
  page: PageType[]
}

export type PageType =
  | {
      id: string
      title: string
      order: string
      type: Exclude<PageFeature, 'VIDEO'>
    }
  | {
      id: string
      title: string
      order: string
      type: 'VIDEO'
      videoLength: string
    }
