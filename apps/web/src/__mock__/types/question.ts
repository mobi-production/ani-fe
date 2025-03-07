export type AnswerType = {
  id: string
  user: string
  profileImage: string
  answerContent: string
  answerDate: Date | string
}

export type QuestionType = {
  id: string
  title: string
  content: string
  createdDate: Date | string
  tag: string
  isAnswered: boolean
  answers: AnswerType[]
}
