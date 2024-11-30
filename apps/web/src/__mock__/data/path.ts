import {
  GetPathDetailResponseType,
  GetPathLoadResponseType,
  GetPathPageResponseType,
  GetPathSidebarStatusResponseType
} from '@/entities/path/lib/types/apis'
import { User } from '../handler/member'
export const pathIntroduceMock = (pathId: number | string): GetPathDetailResponseType['data'] => {
  return {
    isSubscribed: false,
    status: 'PENDING',
    pathId,
    startDate: '2024-11-15T00:00:00.000Z',
    endDate: '2025-03-31T00:00:00.000Z',
    level: '중급',
    maxStudent: 10,
    recruitStartDate: '2024-11-15T00:00:00.000Z',
    recruitEndDate: '2024-12-15T00:00:00.000Z',
    announcementDate: '2024-12-15',
    path: {
      thumbnail: '/avif/placeholder.avif',
      title: 'HTML & CSS 패스',
      description:
        '웹 개발의 기초인 HTML과 CSS를 중점적으로 학습하는 과정입니다. HTML을 통해 웹페이지의 구조를 이해하고, CSS를 통해 스타일과 디자인을 다루는 방법을 배웁니다.',
      content: [
        {
          type: 'heading_1',
          props: {
            id: 'heading-1-1',
            text: 'HTML & CSS 패스',
            rich_text: [
              {
                text: 'HTML & CSS 패스'
              }
            ]
          }
        }
      ]
    },
    parts: [
      {
        id: 1,
        title: 'HTML 개요(1)',
        order: 1,
        page: [
          {
            id: 1,
            order: 1,
            type: 'LEARNING_CONTENTS',
            title: '첫 인사 및 강의 개요'
          },
          {
            id: 2,
            order: 2,
            type: 'LEARNING_CONTENTS',
            title: '기본 문법'
          },
          {
            id: 3,
            order: 3,
            type: 'LEARNING_CONTENTS',
            title: '부모와 자식 관계의 이해'
          },
          {
            id: 4,
            order: 4,
            type: 'LEARNING_CONTENTS',
            title: 'Doctype(DTD)'
          },
          {
            id: 5,
            order: 5,
            type: 'LEARNING_CONTENTS',
            title: 'HTML, HEAD, BODY'
          },
          {
            id: 6,
            order: 6,
            type: 'LEARNING_CONTENTS',
            title: '정보를 의미하는 태그 살펴보기'
          },
          {
            id: 7,
            order: 7,
            type: 'VIDEO',
            title: '화면에 이미지 출력하기',
            videoLength: '15:30'
          },
          {
            id: 8,
            order: 8,
            type: 'QUIZ',
            title: '마무리 퀴즈'
          }
        ]
      },
      {
        id: 2,
        title: 'HTML 개요(2)',
        order: 2,
        page: [
          {
            id: 9,
            order: '9',
            type: 'LEARNING_CONTENTS',
            title: '첫 인사 및 강의 개요'
          },
          {
            id: 10,
            order: '10',
            type: 'LEARNING_CONTENTS',
            title: '기본 문법'
          },
          {
            id: 11,
            order: '11',
            type: 'LEARNING_CONTENTS',
            title: '부모와 자식 관계의 이해'
          },
          {
            id: 12,
            order: 12,
            type: 'LEARNING_CONTENTS',
            title: 'Doctype(DTD)'
          },
          {
            id: 13,
            order: 13,
            type: 'LEARNING_CONTENTS',
            title: 'HTML, HEAD, BODY'
          },
          {
            id: 14,
            order: 14,
            type: 'LEARNING_CONTENTS',
            title: '정보를 의미하는 태그 살펴보기'
          },
          {
            id: 15,
            order: 15,
            type: 'VIDEO',
            title: '화면에 이미지 출력하기',
            videoLength: '15:30'
          }
        ]
      },
      {
        id: 2,
        title: 'HTML 개요(2)',
        order: 2,
        page: [
          {
            id: 9,
            order: '9',
            type: 'LEARNING_CONTENTS',
            title: '첫 인사 및 강의 개요'
          },
          {
            id: 10,
            order: '10',
            type: 'LEARNING_CONTENTS',
            title: '기본 문법'
          },
          {
            id: 11,
            order: '11',
            type: 'LEARNING_CONTENTS',
            title: '부모와 자식 관계의 이해'
          },
          {
            id: 12,
            order: 12,
            type: 'LEARNING_CONTENTS',
            title: 'Doctype(DTD)'
          },
          {
            id: 13,
            order: 13,
            type: 'LEARNING_CONTENTS',
            title: 'HTML, HEAD, BODY'
          },
          {
            id: 14,
            order: 14,
            type: 'LEARNING_CONTENTS',
            title: '정보를 의미하는 태그 살펴보기'
          },
          {
            id: 15,
            order: 15,
            type: 'VIDEO',
            title: '화면에 이미지 출력하기',
            videoLength: '15:30'
          }
        ]
      },
      {
        id: 2,
        title: 'HTML 개요(2)',
        order: 2,
        page: [
          {
            id: 9,
            order: '9',
            type: 'LEARNING_CONTENTS',
            title: '첫 인사 및 강의 개요'
          },
          {
            id: 10,
            order: '10',
            type: 'LEARNING_CONTENTS',
            title: '기본 문법'
          },
          {
            id: 11,
            order: '11',
            type: 'LEARNING_CONTENTS',
            title: '부모와 자식 관계의 이해'
          },
          {
            id: 12,
            order: 12,
            type: 'LEARNING_CONTENTS',
            title: 'Doctype(DTD)'
          },
          {
            id: 13,
            order: 13,
            type: 'LEARNING_CONTENTS',
            title: 'HTML, HEAD, BODY'
          },
          {
            id: 14,
            order: 14,
            type: 'LEARNING_CONTENTS',
            title: '정보를 의미하는 태그 살펴보기'
          },
          {
            id: 15,
            order: 15,
            type: 'VIDEO',
            title: '화면에 이미지 출력하기',
            videoLength: '15:30'
          }
        ]
      }
    ]
  }
}

export const pathSidebarStatusMock = (
  pathId: number | string,
  status?: 'IN_PROGRESS' | 'PENDING_REVIEW' | 'COMPLETED'
): GetPathSidebarStatusResponseType['data'] => {
  return {
    path: {
      id: pathId,
      title: 'HTML & CSS 패스',
      thumbnail: '/avif/placeholder.avif',
      startDate: '2024-11-15T00:00:00.000Z',
      endDate: '2025-03-31T00:00:00.000Z',
      progress: 100,
      status: status ? status : 'PENDING_REVIEW',
      mentors: [
        {
          nickname: '김멘토',
          profileUrl: '/avif/placeholder.avif',
          email: 'mentor1@example.com'
        },
        {
          nickname: '이멘토',
          profileUrl: '/avif/placeholder.avif',
          email: 'mentor2@example.com'
        }
      ],
      crews: [
        {
          nickname: '김크루',
          profileUrl: '/avif/placeholder.avif',
          email: 'crew1@example.com'
        },
        {
          nickname: '이크루',
          profileUrl: '/avif/placeholder.avif',
          email: 'crew2@example.com'
        },
        {
          nickname: '박크루',
          profileUrl: '/avif/placeholder.avif',
          email: 'crew3@example.com'
        }
      ]
    },
    curriculum: {
      parts: [
        {
          id: 1,
          order: 1,
          title: 'HTML 개요(1)',
          page: [
            {
              id: 1,
              title: 'HTML 개요(1)',
              type: 'LEARNING_CONTENTS',
              checked: true
            },
            {
              id: 2,
              title: 'HTML 개요(2)',
              type: 'LEARNING_CONTENTS',
              checked: true
            },
            {
              id: 3,
              title: 'HTML 개요(3)',
              type: 'LEARNING_CONTENTS',
              checked: false
            }
          ]
        },
        {
          id: 2,
          order: 2,
          title: 'HTML 개요(2)',
          page: [
            {
              id: 4,
              title: 'HTML 개요(1)',
              type: 'LEARNING_CONTENTS',
              checked: true
            },
            {
              id: 5,
              title: 'HTML 개요(2)',
              type: 'VIDEO',
              videoLength: '15:30',
              checked: true
            },
            {
              id: 6,
              title: 'HTML 개요(3)',
              type: 'LEARNING_CONTENTS',
              checked: false
            }
          ]
        }
      ]
    },
    quiz: {
      parts: [
        {
          id: 3,
          order: 1,
          title: 'HTML 개요(1)',
          page: [
            {
              id: 4,
              title: 'HTML 개요(1)',
              type: 'QUIZ',
              checked: true
            }
          ]
        },
        {
          id: 4,
          order: 2,
          title: 'HTML 개요(2)',
          page: [
            {
              id: 5,
              title: 'HTML 개요(2)',
              type: 'QUIZ',
              checked: false
            }
          ]
        }
      ]
    }
  }
}

export const pathPageMock: GetPathPageResponseType['data'] = {
  partName: 'HTML 개요(1)',
  pageName: '마무리 퀴즈',
  type: 'LEARNING_CONTENTS',
  content: []
}

export const pathLoadMock = (pathId: string): GetPathLoadResponseType['data'] => {
  return {
    pathId,
    partId: '1',
    pageId: '1'
  }
}
