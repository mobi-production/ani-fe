export type QuestionDetailType = {
  id: string
  pathName: string
  title: string
  contents: string
}

export type GetQuestionDetailResponseType = {
  status: number
  data: QuestionDetailType
}
