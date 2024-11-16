type PathFeature = {
  id: number
  emoji: string
  description: string
}

type PathSubTitle = {
  title: string
  description: string
}

type PathDescription = {
  title: string
  subTitle: PathSubTitle[]
}

type PathContentItem = {
  pathId: number
  type: 'page' | 'video' | 'quiz'
  title: string
  videoLength?: string
}

type PathContent = {
  partId: number
  title: string
  path: PathContentItem[]
}

export type PathIntroduce = {
  id: string
  title: string
  description: string
  imageUrl: string
  recruitmentStartDate: string
  applicationDeadline: string
  announcementDate: string
  pathStartDate: string
  pathEndDate: string
  recruitedPeople: number
  difficultyLevel: '초급' | '중급' | '고급'
  pathDescription: PathDescription
  pathFeatures: PathFeature[]
  pathContents: PathContent[]
}

export const pathIntroduce: PathIntroduce = {
  id: '1',
  title: 'HTML & CSS 패스',
  description:
    '웹 개발의 기초인 HTML과 CSS를 중점적으로 학습하는 과정입니다. HTML을 통해 웹페이지의 구조를 이해하고, CSS를 통해 스타일과 디자인을 다루는 방법을 배웁니다. 이 패스는 웹 개발의 기초인 HTML과 CSS를 중점적으로 학습하는 과정입니다. HTML을 통해 웹페이지의 구조를 이해하고, CSS를 통해 스타일과 디자인을 다루는 방법을 배웁니다.',
  imageUrl: 'https://picsum.photos/300/225',
  recruitmentStartDate: '2024-11-15',
  applicationDeadline: '2024-12-15',
  announcementDate: '2024-12-20',
  pathStartDate: '2025-01-01',
  pathEndDate: '2025-03-31',
  recruitedPeople: 10,
  difficultyLevel: '중급',
  pathDescription: {
    title:
      '웹 개발의 기본 요소인 HTML과 CSS에 대한 깊이 있는 이해와 실무 능력을 기르는 것을 목표로 해요!',
    subTitle: [
      {
        title: '1. HTML의 구조 이해',
        description:
          '웹 개발의 기본 요소인 HTML과 CSS에 대한 깊이 있는 이해와 실무 능력을 기르는 것을 목표로 해요!'
      },
      {
        title: '2. CSS를 활용한 디자인 적용',
        description:
          'CSS를 활용하여 웹페이지의 레이아웃, 색상, 폰트 등 스타일을 설정하고, 반응형 웹 디자인을 구현할 수 있는 능력을 배워요.'
      }
    ]
  },
  pathFeatures: [
    {
      id: 1,
      emoji: '😥',
      description: '혼자 공부하기가 힘든 분'
    },
    {
      id: 2,
      emoji: '🫡',
      description: '끝까지 배울 의지가 있는 분'
    },
    {
      id: 3,
      emoji: '🤓',
      description: '끈기에 자신있는 분'
    }
  ],
  pathContents: [
    {
      partId: 1,
      title: 'HTML 개요(1)',
      path: [
        {
          pathId: 1,
          type: 'page',
          title: '첫 인사 및 강의 개요'
        },
        {
          pathId: 2,
          type: 'page',
          title: '기본 문법'
        },
        {
          pathId: 3,
          type: 'page',
          title: '부모와 자식 관계의 이해'
        },
        {
          pathId: 4,
          type: 'page',
          title: 'Doctype(DTD)'
        },
        {
          pathId: 5,
          type: 'page',
          title: 'HTML, HEAD, BODY'
        },
        {
          pathId: 6,
          type: 'page',
          title: '정보를 의미하는 태그 살펴보기'
        },
        {
          pathId: 7,
          type: 'video',
          title: '화면에 이미지 출력하기',
          videoLength: '15:30'
        },
        {
          pathId: 8,
          type: 'quiz',
          title: '마무리 퀴즈'
        }
      ]
    },
    {
      partId: 2,
      title: 'HTML 개요(2)',
      path: [
        {
          pathId: 9,
          type: 'page',
          title: '첫 인사 및 강의 개요'
        },
        {
          pathId: 10,
          type: 'page',
          title: '기본 문법'
        },
        {
          pathId: 11,
          type: 'page',
          title: '부모와 자식 관계의 이해'
        },
        {
          pathId: 12,
          type: 'page',
          title: 'Doctype(DTD)'
        },
        {
          pathId: 13,
          type: 'page',
          title: 'HTML, HEAD, BODY'
        },
        {
          pathId: 14,
          type: 'page',
          title: '정보를 의미하는 태그 살펴보기'
        },
        {
          pathId: 15,
          type: 'video',
          title: '화면에 이미지 출력하기',
          videoLength: '15:30'
        }
      ]
    },
    {
      partId: 3,
      title: 'HTML 개요(3)',
      path: [
        {
          pathId: 16,
          type: 'page',
          title: '첫 인사 및 강의 개요'
        },
        {
          pathId: 17,
          type: 'page',
          title: '기본 문법'
        },
        {
          pathId: 18,
          type: 'page',
          title: '부모와 자식 관계의 이해'
        },
        {
          pathId: 19,
          type: 'page',
          title: 'Doctype(DTD)'
        },
        {
          pathId: 20,
          type: 'page',
          title: 'HTML, HEAD, BODY'
        },
        {
          pathId: 21,
          type: 'page',
          title: '정보를 의미하는 태그 살펴보기'
        },
        {
          pathId: 22,
          type: 'video',
          title: '화면에 이미지 출력하기',
          videoLength: '15:30'
        }
      ]
    }
  ]
}
