export const mockFeedbackList = [
  {
    courseName: 'HTML 개요 (1)',
    type: 'PART',
    version: 1,
    questions: [
      {
        type: 'likert',
        isReverseCoded: false,
        title: '파트의 내용이 기대에 부합했나요?'
      },
      {
        type: 'likert',
        isReverseCoded: false,
        title: '주어진 학습자료가 만족스러웠나요?'
      },
      {
        type: 'likert',
        isReverseCoded: false,
        title: '실습문제나 퀴즈가 학습내용을 이해하는데 도움이 되었나요?'
      },
      {
        type: 'openEnded',
        title: '파트의 내용과 관련하여 추가로 배우고 싶은 내용이 있나요? 있다면 무엇인가요?'
      },
      {
        type: 'openEnded',
        title: '파트를 진행하면서 아쉬운 점이 있었나요? 있다면 어떤 부분이었나요?'
      },
      {
        type: 'openEnded',
        title: '추가로 파트에 대해 남기고 싶은 의견이 있다면 자유롭게 기재해주세요.'
      }
    ]
  },
  {
    courseName: 'HTML 개요 (1)',
    type: 'MENTO',
    version: 1,
    questions: [
      {
        type: 'likert',
        isReverseCoded: false,
        title: '질문에 대한 멘토의 답변은 명확하고 도움이 되었나요?'
      },
      {
        type: 'likert',
        isReverseCoded: false,
        title: '멘토가 본인과 잘 소통하고 경청했나요?'
      },
      {
        type: 'likert',
        isReverseCoded: false,
        title: '학습 중 필요할 때 멘토에게 쉽게 도움을 요청할 수 있었나요? '
      },
      {
        type: 'likert',
        isReverseCoded: false,
        title: '멘토의 조언이 학습에 대한 동기 부여가 되었나요?'
      },
      {
        type: 'openEnded',
        isReverseCoded: false,
        title: '추가로 멘토에 대해 남기고 싶은 의견이 있다면 자유롭게 기재해주세요.'
      }
    ]
  },
  {
    courseName: 'HTML 개요 (1)',
    type: 'PAIR',
    version: 2,
    questions: [
      {
        type: 'likert',
        isReverseCoded: false,
        title: '페어가 소통에 열정을 가지고 임했나요? '
      },
      {
        type: 'likert',
        isReverseCoded: false,
        title: '문제가 발생했을 때, 페어가 해결을 위한 논의에 적극적으로 참여했나요?'
      },
      {
        type: 'openEnded',
        isReverseCoded: false,
        title: '학습을 함꼐 하면서 느낀 이 페어의 장점이 있다면, 무엇인가요?'
      },
      {
        type: 'openEnded',
        isReverseCoded: false,
        title: '추가로 페어에 대해 남기고 싶은 의견이 있다면 자유롭게 기재해주세요.'
      }
    ]
  },

  {
    courseName: 'HTML 개요 (1)',
    type: 'PATH',
    version: 1,
    questions: [
      {
        type: 'likert',
        isReverseCoded: false,
        title: '이번 HTML/CSS 패스에서 배운 내용을 모두 이해했나요?'
      },
      {
        type: 'likert',
        isReverseCoded: false,
        title:
          '패스에서 제공된 자료(예: 슬라이드, 예제 코드, 참고 링크 등)는 학습에 얼마나 도움이 되었나요?'
      },
      {
        type: 'likert',
        isReverseCoded: false,
        title: '패스 중 제공된 실습 활동은 실제로 HTML/CSS를 이해하는 데 얼마나 도움이 되었나요?'
      },
      {
        type: 'openEnded',
        isReverseCoded: false,
        title: '추가로 더 배우고 싶은 주제나, 더 설명이 필요하다고 생각되는 부분이 있나요?'
      },
      {
        type: 'openEnded',
        isReverseCoded: false,
        title:
          '패스에서 개선했으면 하는 부분이나 제안하고 싶은 사항이 있다면 자유롭게 기재해주세요.'
      }
    ]
  }
]
