export type ErrorResponse = {
  status: number
  message: string
}

export type MyPageProfileData = {
  userId: string
  nickname: string
  image: string
  email: string
  emailVerified: boolean
  password: string
  passwordConfirmation: string
}

type PathStatus = 'SCHEDULE' | 'IN_PROGRESS' | 'COMPLETED' | 'NOT_COMPLETE'

type AssignmentStatus = 'SUBMIT_AVAILABLE' | 'SUBMITTED' | 'DEADLINE_PASSED'

type BasePath = {
  id: number
  image: string
  level: number
  category: string
  pathName: string
  status: PathStatus
}

export type InProgressPath = BasePath & {
  status: PathStatus
  progress: number
}

export type CompletedPath = BasePath & {
  status: PathStatus
  startDate: string
  endDate: string
  action: string
}

export type Assignment = {
  id: number
  image: string
  pathName: string
  assignMentName: string
  status: AssignmentStatus
  dueDate: string
}

export type FeedbackItem = {
  id: string
  authorProfileImage: string
  authorNickname: string
  description: string
}

export type Feedback = {
  pathName: string
  feedbackListByPath: FeedbackItem[]
  feedbackListByPart: FeedbackItem[]
  feedbackListByPage: FeedbackItem[]
}

export type MyPageData = {
  inProgressPathList: InProgressPath[]
  completedPathList: CompletedPath[]
  assignmentList: Assignment[]
  feedbackList: Feedback[]
}
