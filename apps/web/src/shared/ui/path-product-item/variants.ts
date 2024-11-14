import { BadgeColors } from '@repo/ui/components/badge/variants'

export const PATH_STATUS_BADGE = {
  SCHEDULE: {
    LABEL: '진행 예정',
    COLOR: BadgeColors.PURPLE
  },
  IN_PROGRESS: {
    LABEL: '진행 중',
    COLOR: BadgeColors.ORANGE
  },
  COMPLETED: {
    LABEL: '수료',
    COLOR: BadgeColors.GREEN
  },
  NOT_COMPLETE: {
    LABEL: '미수료',
    COLOR: BadgeColors.RED
  }
} as const

export type PathStatusBadgeType = keyof typeof PATH_STATUS_BADGE

export const ASSIGNMENT_STATUS_BADGE = {
  SUBMIT_AVAILABLE: {
    LABEL: '제출 가능',
    COLOR: BadgeColors.BLUE
  },
  SUBMITTED: {
    LABEL: '제출 완료',
    COLOR: BadgeColors.GREEN
  },
  DEADLINE_PASSED: {
    LABEL: '제출 마감',
    COLOR: BadgeColors.GRAY
  }
} as const

export type AssignmentStatusBadgeType = keyof typeof ASSIGNMENT_STATUS_BADGE
