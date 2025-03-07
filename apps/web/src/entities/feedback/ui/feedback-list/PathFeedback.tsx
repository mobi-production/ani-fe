import { FEEDBACK_ANSWER_TYPE, mockFeedbackList } from '@/__mock__/data/feedback'
import FeedbackList from '@/widgets/feedback/ui/feedback-list'

export function PathFeedback() {
  const PATH_FEEDBACK_LIST = mockFeedbackList.find((list) => list.type === 'PATH')

  if (!PATH_FEEDBACK_LIST) return null
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
          {question.type === FEEDBACK_ANSWER_TYPE.LIKERT && <FeedbackList.Likert />}
          {question.type === FEEDBACK_ANSWER_TYPE.OPEN_ENDED && (
            <FeedbackList.OpenEnded maxLength={500} />
          )}
        </>
      ))}
    </FeedbackList>
  )
}
