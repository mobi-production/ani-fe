type PathFeature = {
  id: number
  emoji: string
  description: string
}

type PathSubTitle = {
  title: string
  description: string
}

type PathDescription = {
  title: string
  subTitle: PathSubTitle[]
}

type PathContentItem =
  | {
      pathId: number
      type: 'page' | 'video' | 'quiz'
      title: string
    }
  | {
      type: 'video'
      title: string
      videoLength: string
    }

type PathContent = {
  partId: number
  title: string
  path: PathContentItem[]
}

export type PathIntroduce = {
  id: string
  isApplied: boolean
  title: string
  description: string
  imageUrl: string
  recruitmentStartDate: string
  applicationDeadline: string
  announcementDate: string
  pathStartDate: string
  pathEndDate: string
  recruitedPeople: number
  difficultyLevel: '초급' | '중급' | '고급'
  pathDescription: PathDescription
  pathFeatures: PathFeature[]
  pathContents: PathContent[]
}
