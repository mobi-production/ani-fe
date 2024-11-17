type MainBanner = {
  image: string
  description: string
}

type PathStatus = 'SCHEDULE' | 'IN_PROGRESS' | 'COMPLETED' | 'NOT_COMPLETE'

type AssignmentStatus = 'SUBMIT_AVAILABLE' | 'SUBMITTED' | 'DEADLINE_PASSED'

type LearningSummary = {
  id: number
  image: string
  level: number
  category: string
  status: PathStatus
  pathName: string
  completion: number
}

type Assignment = {
  id: number
  image: string
  pathName: string
  assignmentName: string
  endDate: string
  status: AssignmentStatus
}

type Alarm = {
  id: number
  message: string
  date: string
  isRead: boolean
}

export type UserData = {
  learningSummary: LearningSummary[]
  assignment: Assignment[]
  alarm: Alarm[]
}

type Path = {
  id: number
  image: string
  pathName: string
  level: number
  status?: PathStatus
  startDate: string
  endDate: string
}

export type PathData = {
  inProgressPaths: Path[]
  scheduledPaths: Path[]
  upcomingPaths: Path[]
}

export type MainData = {
  mainBanner: MainBanner[]
  userData: UserData
  pathData: PathData
}

export const mainData: MainData = {
  mainBanner: [
    {
      image: '/avif/placeholder.avif',
      description: '메인 배너 이미지'
    }
  ],
  userData: {
    learningSummary: [
      {
        id: 1,
        image: '/avif/placeholder.avif',
        level: 1,
        category: '프론트엔드',
        status: 'SCHEDULE',
        pathName: 'HTML & CSS 기초 이해',
        completion: 0
      },
      {
        id: 2,
        image: '/avif/placeholder.avif',
        level: 2,
        category: '프론트엔드',
        status: 'IN_PROGRESS',
        pathName: 'React 기초 이해',
        completion: 50
      },
      {
        id: 3,
        image: '/avif/placeholder.avif',
        level: 1,
        category: '프론트엔드',
        status: 'COMPLETED',
        pathName: 'Next.js 기초 이해',
        completion: 100
      }
    ],
    assignment: [
      {
        id: 1,
        image: '/avif/placeholder.avif',
        pathName: 'HTML & CSS 기초 이해',
        assignmentName: 'HTML로 웹페이지 만들기',
        endDate: '2024-12-01',
        status: 'SUBMIT_AVAILABLE'
      },
      {
        id: 2,
        image: '/avif/placeholder.avif',
        pathName: 'React 기초 이해',
        assignmentName: 'React로 컴포넌트 만들기',
        endDate: '2024-12-01',
        status: 'SUBMITTED'
      },
      {
        id: 3,
        image: '/avif/placeholder.avif',
        pathName: 'Next.js 기초 이해',
        assignmentName: 'Next.js로 SSR 구현하기',
        endDate: '2024-11-20',
        status: 'DEADLINE_PASSED'
      }
    ],
    alarm: [
      {
        id: 1,
        message: '과제 제출 기한이 지났습니다.',
        date: '2024-12-10',
        isRead: false
      },
      {
        id: 2,
        message: '새로운 학습 경로가 추가되었습니다.',
        date: '2024-12-05',
        isRead: true
      },
      {
        id: 3,
        message: '다음 주에 새로운 과제가 시작됩니다.',
        date: '2024-12-15',
        isRead: false
      }
    ]
  },
  pathData: {
    inProgressPaths: [
      {
        id: 1,
        image: '/avif/placeholder.avif',
        pathName: 'React 상태 관리 심화',
        level: 3,
        status: 'IN_PROGRESS',
        startDate: '2024-11-20',
        endDate: '2024-12-10'
      },
      {
        id: 2,
        image: '/avif/placeholder.avif',
        pathName: 'TypeScript 중급',
        level: 4,
        status: 'IN_PROGRESS',
        startDate: '2024-11-25',
        endDate: '2024-12-15'
      },
      {
        id: 3,
        image: '/avif/placeholder.avif',
        pathName: 'CSS Grid 레이아웃 이해',
        level: 2,
        status: 'IN_PROGRESS',
        startDate: '2024-11-30',
        endDate: '2024-12-20'
      },
      {
        id: 4,
        image: '/avif/placeholder.avif',
        pathName: 'Vue.js 심화 이해',
        level: 3,
        status: 'IN_PROGRESS',
        startDate: '2024-12-01',
        endDate: '2024-12-25'
      }
    ],
    scheduledPaths: [
      {
        id: 1,
        image: '/avif/placeholder.avif',
        pathName: 'React 상태 관리 이해',
        level: 3,
        status: 'SCHEDULE',
        startDate: '2024-12-15',
        endDate: '2024-12-25'
      },
      {
        id: 2,
        image: '/avif/placeholder.avif',
        pathName: 'React Hooks 심화',
        level: 3,
        status: 'SCHEDULE',
        startDate: '2024-12-10',
        endDate: '2024-12-20'
      },
      {
        id: 3,
        image: '/avif/placeholder.avif',
        pathName: 'Next.js 고급 이해',
        level: 4,
        status: 'SCHEDULE',
        startDate: '2024-12-05',
        endDate: '2024-12-15'
      },
      {
        id: 4,
        image: '/avif/placeholder.avif',
        pathName: 'TypeScript 기초',
        level: 2,
        status: 'SCHEDULE',
        startDate: '2024-11-25',
        endDate: '2024-12-05'
      }
    ],
    upcomingPaths: [
      {
        id: 1,
        image: '/avif/placeholder.avif',
        pathName: 'Vue.js 기초 이해',
        level: 1,
        startDate: '2024-12-30',
        endDate: '2025-01-10'
      },
      {
        id: 2,
        image: '/avif/placeholder.avif',
        pathName: 'Angular 기초 이해',
        level: 2,
        startDate: '2024-12-20',
        endDate: '2024-12-30'
      },
      {
        id: 3,
        image: '/avif/placeholder.avif',
        pathName: 'JavaScript 심화',
        level: 3,
        startDate: '2024-12-15',
        endDate: '2024-12-25'
      },
      {
        id: 4,
        image: '/avif/placeholder.avif',
        pathName: 'CSS 애니메이션',
        level: 2,
        startDate: '2024-12-05',
        endDate: '2024-12-15'
      }
    ]
  }
}