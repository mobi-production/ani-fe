import type { MyPageData, MyPageProfileData } from '../types/mypage'

export const myPageProfileData: MyPageProfileData = {
  userId: '1',
  nickname: 'Creme',
  image: '/avif/placeholder.avif',
  email: 'email@naver.com',
  emailVerified: true,
  password: 'creme1234@',
  passwordConfirmation: 'creme1234@'
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
      pathName: 'React 기초 마스터',
      feedbackListByPath: [
        {
          id: 'feedback1',
          authorProfileImage: '/avif/placeholder.avif',
          authorNickname: '민수',
          description:
            '1. 상태 관리 개선\n상태 관리를 좀 더 효율적으로 할 수 있는 방안을 고민해보세요. 예를 들어, Context API를 활용하면 상태 공유가 더 용이해질 수 있습니다.\n' +
            '2. 컴포넌트 분리\n큰 컴포넌트를 더 작은 단위로 분리하여 재사용성을 높이는 것이 좋겠습니다.\n' +
            '3. 코드 최적화\n불필요한 렌더링을 줄이기 위해 React.memo를 활용해보세요.'
        },
        {
          id: 'feedback2',
          authorProfileImage: '/avif/placeholder.avif',
          authorNickname: '지연',
          description:
            '1. 이벤트 핸들링\n이벤트 핸들링 로직을 더 명확하게 작성하면 가독성이 향상됩니다.\n' +
            '2. PropTypes 사용\n컴포넌트의 Props에 대한 타입을 명확히 지정하여 오류를 줄여보세요.\n' +
            '3. 스타일링 일관성\nCSS 클래스 네이밍을 일관되게 유지하여 유지보수성을 높이세요.'
        }
      ],
      feedbackListByPart: [
        {
          id: 'feedback3',
          authorProfileImage: '/avif/placeholder.avif',
          authorNickname: '준호',
          description:
            '1. 라이프사이클 메소드 활용\n클래스 컴포넌트의 라이프사이클 메소드를 적절히 활용하면 컴포넌트의 동작을 더 세밀하게 제어할 수 있습니다.\n' +
            '2. 비동기 처리 개선\n비동기 데이터를 처리할 때 async/await를 사용하여 코드를 더 간결하게 만들어보세요.\n' +
            '3. 오류 처리 강화\n에러 경계를 설정하여 예상치 못한 오류를 사용자에게 명확히 전달하세요.'
        },
        {
          id: 'feedback4',
          authorProfileImage: '/avif/placeholder.avif',
          authorNickname: '수빈',
          description:
            '1. 테스트 작성\n컴포넌트에 대한 단위 테스트를 작성하여 코드의 신뢰성을 높이세요.\n' +
            '2. 접근성 고려\n웹 접근성을 고려하여 ARIA 속성을 활용해보세요.\n' +
            '3. 코드 주석 추가\n복잡한 로직에는 주석을 추가하여 다른 개발자들이 이해하기 쉽게 작성하세요.'
        }
      ],
      feedbackListByPage: [
        {
          id: 'feedback5',
          authorProfileImage: '/avif/placeholder.avif',
          authorNickname: '유진',
          description:
            '1. 반응형 디자인\n모바일 환경에서도 잘 동작하도록 반응형 디자인을 적용해보세요.\n' +
            '2. 성능 최적화\n코드 스플리팅을 통해 초기 로딩 속도를 개선할 수 있습니다.\n' +
            '3. 사용자 경험 향상\n인터랙티브한 요소를 추가하여 사용자 경험을 향상시키세요.'
        },
        {
          id: 'feedback6',
          authorProfileImage: '/avif/placeholder.avif',
          authorNickname: '태현',
          description:
            '1. SEO 최적화\n검색 엔진 최적화를 통해 웹사이트의 가시성을 높이세요.\n' +
            '2. 코드 일관성\n코딩 스타일 가이드를 준수하여 코드의 일관성을 유지하세요.\n' +
            '3. 데이터 관리\n상태 관리를 위해 Redux와 같은 라이브러리를 도입해보세요.'
        }
      ]
    },
    {
      pathName: 'Node.js 심화',
      feedbackListByPath: [],
      feedbackListByPart: [],
      feedbackListByPage: []
    }
  ]
}
