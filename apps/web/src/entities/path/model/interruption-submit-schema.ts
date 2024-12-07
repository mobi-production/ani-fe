import { z } from 'zod'

const MIN_CONTENTS_LENGTH = 10
const MAX_CONTENTS_LENGTH = 300

export const interruptionSubmitSchema = z.object({
  reason: z
    .string()
    .min(MIN_CONTENTS_LENGTH, `최소 ${MIN_CONTENTS_LENGTH}자 이상의 취소 사유를 작성해주세요.`)
    .max(MAX_CONTENTS_LENGTH, `취소 사유는 최대 ${MAX_CONTENTS_LENGTH}자까지 입력할 수 있습니다.`)
})

export type InterruptionFormData = z.infer<typeof interruptionSubmitSchema>
