import { BadgeColors } from '../../atom/badge/variants'

export const PASS_STATUS_BADGE = {
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

export type PassStatusBadgeType = keyof typeof PASS_STATUS_BADGE
