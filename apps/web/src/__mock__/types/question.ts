export type AnswerType = {
  user: string
  profileImage: string
  answerContent: string
  answerDate: Date | string
}

export type QuestionType = {
  title: string
  content: string
  createdDate: Date | string
  tag: string
  isAnswered: boolean
  answers: AnswerType[]
}
