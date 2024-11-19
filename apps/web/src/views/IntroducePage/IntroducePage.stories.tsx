import type { Meta, StoryObj } from '@storybook/react'
import { Inner } from '.'
import { pathIntroduce } from '@/__mock__/data/path'

const meta = {
  title: 'Page/IntroducePage',
  component: Inner,
  parameters: {
    docs: {
      description: {
        component: `
#### 패스 소개 페이지입니다.

#### 사용 JSON 예시

\`\`\`json
"status": 200,
"data": {
    "content": {
        "type": "FullScreenLayout",
        "content": [
            {
                "type": "PathTitleBanner",
                "props": {
                    "id": "1",
                    "thumbnail": "/avif/placeholder.avif",
                    "title": "HTML & CSS 패스",
                    "description": "HTML & CSS 패스 설명",
                    "isApplied": false
                }
            },
            {
                "type": "PathNavigationLinks",
                "props": {
                    "links": [
                        {"id": "path_information", "title": "패스 정보"},
                        {"id": "path_recommend", "title": "패스 특징"},
                        {"id": "path_curriculum", "title": "커리큘럼"}
                    ]
                }
            },
            {
                "type": "PathInformationBanner",
                "props": {
                    "startDate": "2024-01-01",
                    "endDate": "2024-01-01",
                    "recruitStartDate": "2024-01-01",
                    "recruitEndDate": "2024-01-01",
                    "announcementDate": "2024-01-01",
                    "maxStudent": 20,
                    "level": "초급"
                }
            },
            {
                "type": "Divider",
                "props": {}
            },
            {
                "type": "PathRecommendBanner",
                "props": {
                    "recommendedItems": [
                        {"id": 1, "emoji": "😥", "description": "혼자 공부하기가 힘든 분"},
                        {"id": 2, "emoji": "🫡", "description": "끝까지 배울 의지가 있는 분"},
                        {"id": 3, "emoji": "🤓", "description": "끈기에 자신있는 분"}
                    ]
                }
            },
            {
                "type": "PathCurriculum",
                "props": {
                    "parts": [
                        {
                            "id": 1,
                            "order": "1",
                            "title": "HTML 개요(1)",
                            "page": [
                                {"id": "1", "order": "1", "type": "LEARNING_CONTENTS", "title": "첫 인사 및 강의 개요"},
                                {"id": "2", "order": "2", "type": "LEARNING_CONTENTS", "title": "기본 문법"},
                                {"id": "3", "order": "3", "type": "LEARNING_CONTENTS", "title": "부모와 자식 관계의 이해"},
                                {"id": "4", "order": "4", "type": "LEARNING_CONTENTS", "title": "Doctype(DTD)"},
                                {"id": "5", "order": "5", "type": "LEARNING_CONTENTS", "title": "HTML, HEAD, BODY"},
                                {"id": "6", "order": "6", "type": "LEARNING_CONTENTS", "title": "정보를 의미하는 태그 살펴보기"},
                                {"id": "7", "order": "7", "type": "VIDEO", "title": "화면에 이미지 출력하기", "videoLength": "15:30"},
                                {"id": "8", "order": "8", "type": "QUIZ", "title": "마무리 퀴즈"}
                            ]
                        },
                        {
                            "id": 2,
                            "order": "2",
                            "title": "HTML 개요(2)",
                            "page": [
                                {"id": "9", "order": "1", "type": "LEARNING_CONTENTS", "title": "첫 인사 및 강의 개요"},
                                {"id": "10", "order": "2", "type": "LEARNING_CONTENTS", "title": "기본 문법"},
                                {"id": "11", "order": "3", "type": "LEARNING_CONTENTS", "title": "부모와 자식 관계의 이해"},
                                {"id": "12", "order": "4", "type": "LEARNING_CONTENTS", "title": "Doctype(DTD)"},
                                {"id": "13", "order": "5", "type": "LEARNING_CONTENTS", "title": "HTML, HEAD, BODY"},
                                {"id": "14", "order": "6", "type": "LEARNING_CONTENTS", "title": "정보를 의미하는 태그 살펴보기"},
                                {"id": "15", "order": "7", "type": "VIDEO", "title": "화면에 이미지 출력하기", "videoLength": "15:30"},
                                {"id": "16", "order": "8", "type": "QUIZ", "title": "마무리 퀴즈"}
                            ]
                        }
                    ]
                }
            }
        ]
    }
}
\`\`\`
        `
      }
    },
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Inner>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    data: pathIntroduce.data.content
  }
}
