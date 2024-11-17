export const FEEDBACK_STEP = {
  PART: {
    LABEL: '파트',
    VALUE: 'PART'
  },
  MENTO: {
    LABEL: '멘토',
    VALUE: 'MENTO'
  },
  PAIR: {
    LABEL: '페어',
    VALUE: 'PAIR'
  }
} as const

export type FeedbackStepType = keyof typeof FEEDBACK_STEP
