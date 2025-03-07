export type ErrorResponse = {
  status: number
  message: string
}

type MainBanner = {
  image: string
  description: string
}

type PathStatus = 'SCHEDULE' | 'IN_PROGRESS' | 'COMPLETED' | 'NOT_COMPLETE'

type AssignmentStatus = 'SUBMIT_AVAILABLE' | 'SUBMITTED' | 'DEADLINE_PASSED'

type LearningSummary = {
  id: number
  image: string
  level: number
  category: string
  status: PathStatus
  pathName: string
  completion: number
}

type Assignment = {
  id: number
  image: string
  pathName: string
  assignmentName: string
  endDate: string
  status: AssignmentStatus
}

type Alarm = {
  id: number
  message: string
  date: string
  isRead: boolean
}

export type UserData = {
  learningSummary: LearningSummary[]
  assignment: Assignment[]
  alarm: Alarm[]
}

type Path = {
  id: number
  image: string
  pathName: string
  level: number
  status?: PathStatus
  applyPeriod: string
  progressPeriod: string
}

export type PathData = {
  inProgressPaths: (Path & {
    isApplied: boolean
  })[]
  upcomingPaths: Path[]
}

export type MainData = {
  mainBanner: MainBanner[]
  userData: UserData
  pathData: PathData
}
