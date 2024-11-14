export const PATH_STATUS_BADGE = {
  SCHEDULE: {
    LABEL: '진행 예정',
    COLOR: 'purple'
  },
  IN_PROGRESS: {
    LABEL: '진행 중',
    COLOR: 'orange'
  },
  COMPLETED: {
    LABEL: '수료',
    COLOR: 'green'
  },
  NOT_COMPLETE: {
    LABEL: '미수료',
    COLOR: 'red'
  }
} as const

export type PathStatusBadgeType = keyof typeof PATH_STATUS_BADGE
