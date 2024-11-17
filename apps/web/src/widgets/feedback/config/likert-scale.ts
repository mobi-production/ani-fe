import { z } from 'zod'

export const LIKERT_SCALE_MIN_SCORE = 1
export const LIKERT_SCALE_MAX_SCORE = 5

const LikertScaleNumberSchema = z
  .number()
  .int()
  .min(LIKERT_SCALE_MIN_SCORE)
  .max(LIKERT_SCALE_MAX_SCORE)
const LikertScaleSchema = z.union([LikertScaleNumberSchema, z.undefined()])

export type LikertNumberType = z.infer<typeof LikertScaleNumberSchema>
export type LikertScaleType = z.infer<typeof LikertScaleSchema>

export const SCORE_INDICATOR_TEXT_MAP: Record<number, (isReverseCoded: boolean) => string> = {
  [LIKERT_SCALE_MIN_SCORE]: (isReverseCoded) => (isReverseCoded ? '매우 그렇다' : '매우 아니다'),
  [LIKERT_SCALE_MAX_SCORE]: (isReverseCoded) => (isReverseCoded ? '매우 아니다' : '매우 그렇다')
}
