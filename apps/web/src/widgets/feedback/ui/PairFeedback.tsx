import { mockFeedbackList } from '@/__mock__/data/feedback'
import FeedbackList from './feedback-list'

export function PairFeedback() {
  const PAIR_FEEDBACK_LIST = mockFeedbackList.find((list) => list.type === 'PAIR')

  if (!PAIR_FEEDBACK_LIST) return
  return (
    <div>
      <FeedbackList>
        <FeedbackList.ListTitle
          courseName={PAIR_FEEDBACK_LIST?.courseName}
          category='페어'
        />
        {PAIR_FEEDBACK_LIST.questions.map((question, index) => (
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
    </div>
  )
}
