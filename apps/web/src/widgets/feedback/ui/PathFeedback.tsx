import { mockFeedbackList } from '@/__mock__/data/feedback'
import FeedbackList from './feedback-list'

export function PathFeedback() {
  const PATH_FEEDBACK_LIST = mockFeedbackList.find((list) => list.type === 'PATH')

  if (!PATH_FEEDBACK_LIST) return
  return (
    <FeedbackList>
      <FeedbackList.ListTitle
        courseName={PATH_FEEDBACK_LIST?.courseName}
        category='패스'
      />
      {PATH_FEEDBACK_LIST.questions.map((question, index) => (
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
