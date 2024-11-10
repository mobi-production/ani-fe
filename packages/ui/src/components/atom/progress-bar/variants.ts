import { z } from 'zod'

export const PROGRESS_BAR_VALUE_MIN_VALUE = 0
export const PROGRESS_BAR_VALUE_MAX_VALUE = 100

export const ProgressBarValueSchema = z.number().superRefine((value, ctx) => {
  if (value < PROGRESS_BAR_VALUE_MIN_VALUE) {
    ctx.addIssue({
      code: z.ZodIssueCode.too_small,
      minimum: PROGRESS_BAR_VALUE_MIN_VALUE,
      type: 'number',
      inclusive: true,
      message: `Value is too low. Minimum value allowed is ${PROGRESS_BAR_VALUE_MIN_VALUE}.`
    })
  }
  if (value > PROGRESS_BAR_VALUE_MAX_VALUE) {
    ctx.addIssue({
      code: z.ZodIssueCode.too_big,
      maximum: PROGRESS_BAR_VALUE_MAX_VALUE,
      type: 'number',
      inclusive: true,
      message: `Value is too high. Maximum value allowed is ${PROGRESS_BAR_VALUE_MAX_VALUE}.`
    })
  }
})

export type ProgressBarValue = z.infer<typeof ProgressBarValueSchema>
