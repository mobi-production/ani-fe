import { mockFeedbackList } from '@/__mock__/data/feedback'
import FeedbackList from './feedback-list'

export function PartFeedback() {
  const PART_FEEDBACK_LIST = mockFeedbackList.find((list) => list.type === 'PART')

  if (!PART_FEEDBACK_LIST) return
  return (
    <FeedbackList>
      <FeedbackList.ListTitle
        courseName={PART_FEEDBACK_LIST?.courseName}
        category='파트'
      />
      {PART_FEEDBACK_LIST.questions.map((question, index) => (
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
