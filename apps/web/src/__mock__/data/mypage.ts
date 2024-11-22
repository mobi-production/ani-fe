type PathStatus = 'SCHEDULE' | 'IN_PROGRESS' | 'COMPLETED' | 'NOT_COMPLETE'

type AssignmentStatus = 'SUBMIT_AVAILABLE' | 'SUBMITTED' | 'DEADLINE_PASSED'

type BasePath = {
  id: number
  image: string
  level: number
  category: string
  pathName: string
  status: PathStatus
}

export type InProgressPath = BasePath & {
  status: PathStatus
  progress: number
}

export type CompletedPath = BasePath & {
  status: PathStatus
  startDate: string
  endDate: string
  action: string
}

export type Assignment = {
  id: number
  image: string
  pathName: string
  assignMentName: string
  status: AssignmentStatus
  dueDate: string
}

export type FeedbackItem = {
  authorProfileImage: string
  authorNickname: string
  description: string
}

type Feedback = {
  pathName: string
  feedbackListByPath: FeedbackItem[]
  feedbackListByPart: FeedbackItem[]
  feedbackListByPage: FeedbackItem[]
}

export type MyPageData = {
  inProgressPathList: InProgressPath[]
  completedPathList: CompletedPath[]
  assignmentList: Assignment[]
  feedbackList: Feedback[]
}

export const myPageData: MyPageData = {
  inProgressPathList: [
    {
      id: 0,
      image: '/avif/placeholder.avif',
      level: 1,
      category: '프론트엔드',
      status: 'SCHEDULE',
      pathName: '패스 이름 예제 텍스트',
      progress: 80
    },
    {
      id: 1,
      image: '/avif/placeholder.avif',
      level: 2,
      category: '프론트엔드',
      status: 'SCHEDULE',
      pathName: '패스 이름 예제 텍스트',
      progress: 100
    },
    {
      id: 2,
      image: '/avif/placeholder.avif',
      level: 1,
      category: '프론트엔드',
      status: 'IN_PROGRESS',
      pathName: '패스 이름 예제 텍스트',
      progress: 50
    },
    {
      id: 3,
      image: '/avif/placeholder.avif',
      level: 3,
      category: '프론트엔드',
      status: 'SCHEDULE',
      pathName: '패스 이름 예제 텍스트',
      progress: 60
    },
    {
      id: 4,
      image: '/avif/placeholder.avif',
      level: 1,
      category: '프론트엔드',
      status: 'IN_PROGRESS',
      pathName: '패스 이름 예제 텍스트',
      progress: 90
    }
  ],
  completedPathList: [
    {
      id: 5,
      image: '/avif/placeholder.avif',
      level: 1,
      category: '프론트엔드',
      status: 'COMPLETED',
      pathName: '패스 이름 예제 텍스트',
      startDate: '2024.03.04',
      endDate: '2024.03.18',
      action: '수료증 받기'
    },
    {
      id: 6,
      image: '/avif/placeholder.avif',
      level: 1,
      category: '프론트엔드',
      status: 'COMPLETED',
      pathName: '패스 이름 예제 텍스트',
      startDate: '2024.03.04',
      endDate: '2024.03.18',
      action: '수료증 받기'
    },
    {
      id: 7,
      image: '/avif/placeholder.avif',
      level: 1,
      category: '프론트엔드',
      status: 'NOT_COMPLETE',
      pathName: '패스 이름 예제 텍스트',
      startDate: '2024.03.04',
      endDate: '2024.03.18',
      action: '수료증 받기'
    }
  ],
  assignmentList: [
    {
      id: 1,
      image: '/avif/placeholder.avif',
      pathName: 'HTML & CSS',
      assignMentName: '기본 HTML 태그 과제',
      status: 'SUBMIT_AVAILABLE',
      dueDate: '2024.03.15 12:00 PM'
    },
    {
      id: 2,
      image: '/avif/placeholder.avif',
      pathName: 'JavaScript',
      assignMentName: 'JavaScript 기초 과제',
      status: 'SUBMITTED',
      dueDate: '2024.03.10 11:59 PM'
    },
    {
      id: 3,
      image: '/avif/placeholder.avif',
      pathName: 'React',
      assignMentName: 'React 컴포넌트 실습',
      status: 'DEADLINE_PASSED',
      dueDate: '2024.02.28 06:00 PM'
    },
    {
      id: 4,
      image: '/avif/placeholder.avif',
      pathName: 'Python',
      assignMentName: '파이썬 데이터 분석 과제',
      status: 'SUBMIT_AVAILABLE',
      dueDate: '2024.03.20 05:00 PM'
    },
    {
      id: 5,
      image: '/avif/placeholder.avif',
      pathName: 'Vue.js',
      assignMentName: 'Vue.js 시작하기 과제',
      status: 'SUBMITTED',
      dueDate: '2024.03.18 10:00 AM'
    },
    {
      id: 6,
      image: '/avif/placeholder.avif',
      pathName: 'Django',
      assignMentName: 'Django 프로젝트 설정 과제',
      status: 'DEADLINE_PASSED',
      dueDate: '2024.03.05 09:00 AM'
    }
  ],
  feedbackList: [
    {
      pathName: 'HTML & CSS',
      feedbackListByPath: [
        {
          authorProfileImage: '/avif/placeholder.avif',
          authorNickname: 'Zoey',
          description:
            '1. 태그 사용 연습 강화\n기본 HTML 태그의 사용법을 이해하고 있는 것은 좋지만, 다양한 속성을 함께 활용하는 연습이 더 필요해 보입니다. 예를 들어, <a> 태그에 속성을 추가하여 링크가 새 창에서 열리도록 해본다면 더 좋을 것 같습니다.\n' +
            '2. 코드 구조 정리\n코드 작성 시 줄 바꿈과 들여쓰기를 조금 더 일관성 있게 유지하면 좋겠습니다. 코드를 읽기 쉽고 유지보수하기 좋게 작성하는 습관은 매우 중요합니다. 예를 들어, 각 블록 요소를 한 줄씩 띄우며 작성해 보세요!\n' +
            '3. 과제 제출 시 설명 추가\n코드 작성 후 과제 제출 시, 코드의 의도나 작성 방법에 대해 간단한 설명을 추가하면 좋겠습니다. 이렇게 하면 피드백을 받을 때 더 정확한 조언을 받을 수 있습니다.'
        },
        {
          authorProfileImage: '/avif/placeholder.avif',
          authorNickname: 'Zoey',
          description:
            '1. 태그 사용 연습 강화\n기본 HTML 태그의 사용법을 이해하고 있는 것은 좋지만, 다양한 속성을 함께 활용하는 연습이 더 필요해 보입니다. 예를 들어, <a> 태그에 속성을 추가하여 링크가 새 창에서 열리도록 해본다면 더 좋을 것 같습니다.\n' +
            '2. 코드 구조 정리\n코드 작성 시 줄 바꿈과 들여쓰기를 조금 더 일관성 있게 유지하면 좋겠습니다. 코드를 읽기 쉽고 유지보수하기 좋게 작성하는 습관은 매우 중요합니다. 예를 들어, 각 블록 요소를 한 줄씩 띄우며 작성해 보세요!\n' +
            '3. 과제 제출 시 설명 추가\n코드 작성 후 과제 제출 시, 코드의 의도나 작성 방법에 대해 간단한 설명을 추가하면 좋겠습니다. 이렇게 하면 피드백을 받을 때 더 정확한 조언을 받을 수 있습니다.'
        }
      ],
      feedbackListByPart: [
        {
          authorProfileImage: '/avif/placeholder.avif',
          authorNickname: 'Zoey',
          description:
            '1. 태그 사용 연습 강화\n기본 HTML 태그의 사용법을 이해하고 있는 것은 좋지만, 다양한 속성을 함께 활용하는 연습이 더 필요해 보입니다. 예를 들어, <a> 태그에 속성을 추가하여 링크가 새 창에서 열리도록 해본다면 더 좋을 것 같습니다.\n' +
            '2. 코드 구조 정리\n코드 작성 시 줄 바꿈과 들여쓰기를 조금 더 일관성 있게 유지하면 좋겠습니다. 코드를 읽기 쉽고 유지보수하기 좋게 작성하는 습관은 매우 중요합니다. 예를 들어, 각 블록 요소를 한 줄씩 띄우며 작성해 보세요!\n' +
            '3. 과제 제출 시 설명 추가\n코드 작성 후 과제 제출 시, 코드의 의도나 작성 방법에 대해 간단한 설명을 추가하면 좋겠습니다. 이렇게 하면 피드백을 받을 때 더 정확한 조언을 받을 수 있습니다.'
        },
        {
          authorProfileImage: '/avif/placeholder.avif',
          authorNickname: 'Zoey',
          description:
            '1. 태그 사용 연습 강화\n기본 HTML 태그의 사용법을 이해하고 있는 것은 좋지만, 다양한 속성을 함께 활용하는 연습이 더 필요해 보입니다. 예를 들어, <a> 태그에 속성을 추가하여 링크가 새 창에서 열리도록 해본다면 더 좋을 것 같습니다.\n' +
            '2. 코드 구조 정리\n코드 작성 시 줄 바꿈과 들여쓰기를 조금 더 일관성 있게 유지하면 좋겠습니다. 코드를 읽기 쉽고 유지보수하기 좋게 작성하는 습관은 매우 중요합니다. 예를 들어, 각 블록 요소를 한 줄씩 띄우며 작성해 보세요!\n' +
            '3. 과제 제출 시 설명 추가\n코드 작성 후 과제 제출 시, 코드의 의도나 작성 방법에 대해 간단한 설명을 추가하면 좋겠습니다. 이렇게 하면 피드백을 받을 때 더 정확한 조언을 받을 수 있습니다.'
        }
      ],
      feedbackListByPage: [
        {
          authorProfileImage: '/avif/placeholder.avif',
          authorNickname: 'Zoey',
          description:
            '1. 태그 사용 연습 강화\n기본 HTML 태그의 사용법을 이해하고 있는 것은 좋지만, 다양한 속성을 함께 활용하는 연습이 더 필요해 보입니다. 예를 들어, <a> 태그에 속성을 추가하여 링크가 새 창에서 열리도록 해본다면 더 좋을 것 같습니다.\n' +
            '2. 코드 구조 정리\n코드 작성 시 줄 바꿈과 들여쓰기를 조금 더 일관성 있게 유지하면 좋겠습니다. 코드를 읽기 쉽고 유지보수하기 좋게 작성하는 습관은 매우 중요합니다. 예를 들어, 각 블록 요소를 한 줄씩 띄우며 작성해 보세요!\n' +
            '3. 과제 제출 시 설명 추가\n코드 작성 후 과제 제출 시, 코드의 의도나 작성 방법에 대해 간단한 설명을 추가하면 좋겠습니다. 이렇게 하면 피드백을 받을 때 더 정확한 조언을 받을 수 있습니다.'
        },
        {
          authorProfileImage: '/avif/placeholder.avif',
          authorNickname: 'Zoey',
          description:
            '1. 태그 사용 연습 강화\n기본 HTML 태그의 사용법을 이해하고 있는 것은 좋지만, 다양한 속성을 함께 활용하는 연습이 더 필요해 보입니다. 예를 들어, <a> 태그에 속성을 추가하여 링크가 새 창에서 열리도록 해본다면 더 좋을 것 같습니다.\n' +
            '2. 코드 구조 정리\n코드 작성 시 줄 바꿈과 들여쓰기를 조금 더 일관성 있게 유지하면 좋겠습니다. 코드를 읽기 쉽고 유지보수하기 좋게 작성하는 습관은 매우 중요합니다. 예를 들어, 각 블록 요소를 한 줄씩 띄우며 작성해 보세요!\n' +
            '3. 과제 제출 시 설명 추가\n코드 작성 후 과제 제출 시, 코드의 의도나 작성 방법에 대해 간단한 설명을 추가하면 좋겠습니다. 이렇게 하면 피드백을 받을 때 더 정확한 조언을 받을 수 있습니다.'
        }
      ]
    },
    {
      pathName: 'JavaScript',
      feedbackListByPath: [],
      feedbackListByPart: [],
      feedbackListByPage: []
    }
  ]
}
