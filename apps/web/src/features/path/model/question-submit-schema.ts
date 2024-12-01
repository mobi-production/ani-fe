import { z } from 'zod'

const MIN_TITLE_LENGTH = 1
const MAX_TITLE_LENGTH = 20
const MIN_CONTENTS_LENGTH = 10
const MAX_CONTENTS_LENGTH = 300

export const questionSubmitSchema = z.object({
  title: z
    .string()
    .min(MIN_TITLE_LENGTH, `최소 ${MIN_TITLE_LENGTH}자 이상의 제목을 입력해주세요.`)
    .max(MAX_TITLE_LENGTH, `제목은 최대 ${MAX_TITLE_LENGTH}자까지 입력할 수 있습니다.`),
  password: z
    .string()
    .min(10, `최소 ${MIN_CONTENTS_LENGTH}자 이상의 질문을 작성해주세요.`)
    .max(MAX_CONTENTS_LENGTH, `질문은 최대 ${MAX_CONTENTS_LENGTH}자까지 입력할 수 있습니다.`)
})

export type QuestionFormData = z.infer<typeof questionSubmitSchema>
