import { z } from 'zod'

export const PROGRESS_BAR_VALUE_MIN_VALUE = 0
export const PROGRESS_BAR_VALUE_MAX_VALUE = 100
export const ProgressBarValueSchema = z
  .number()
  .int()
  .min(PROGRESS_BAR_VALUE_MIN_VALUE)
  .max(PROGRESS_BAR_VALUE_MAX_VALUE)

export type ProgressBarValue = z.infer<typeof ProgressBarValueSchema>
