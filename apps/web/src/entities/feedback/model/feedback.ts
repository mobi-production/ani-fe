export const FEEDBACK_RESPONSE_CATEGORY = {
  LIKERT: 'LIKERT',
  OPEN_ENDED: 'OPEN_ENDED'
} as const

export type FeedbackResponseCategoryType = keyof typeof FEEDBACK_RESPONSE_CATEGORY
