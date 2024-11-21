import { GetPathIntroduceResponseType } from '../types/introduce'

export const pathIntroduceMock = (
  pathId: number | string
): GetPathIntroduceResponseType['data'] => {
  return {
    isSubscribed: false,
    status: 'PENDING',
    pathId,
    startDate: '2024-11-15',
    endDate: '2025-03-31',
    level: '중급',
    maxStudent: 10,
    recruitStartDate: '2024-11-15',
    recruitEndDate: '2024-12-15',
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
            text: 'HTML & CSS 패스'
          }
        },
        {
          type: 'paragraph',
          props: {
            text: `엄청 재밌어요 큭큭`,
            style: {
              variant: 'body-1-normal'
            }
          }
        },
        {
          type: 'paragraph',
          props: {
            style: {
              variant: 'body-1-normal'
            }
          }
        },
        {
          type: 'divider'
        },
        {
          type: 'heading_2',
          props: {
            text: 'HTML 개요(1)'
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
