import { mockFeedbackList } from '@/__mock__/data/feedback'
import FeedbackList from './feedback-list'

export function MentoFeedback() {
  const MENTO_FEEDBACK_LIST = mockFeedbackList.find((list) => list.type === 'MENTO')

  if (!MENTO_FEEDBACK_LIST) return null
  return (
    <FeedbackList>
      <FeedbackList.ListTitle
        courseName={MENTO_FEEDBACK_LIST?.courseName}
        category='멘토'
      />
      {MENTO_FEEDBACK_LIST.questions.map((question, index) => (
        <>
          <FeedbackList.QuestionTitle
            questionIndex={index + 1}
            title={question.title}
          />
          {question.type === 'likert' && <FeedbackList.Likert />}
          {question.type === 'openEnded' && <FeedbackList.OpenEnded maxLength={500} />}
        </>
      ))}
    </FeedbackList>
  )
}
