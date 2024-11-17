import { FEEDBACK_ANSWER_TYPE, mockFeedbackList } from '@/__mock__/data/feedback'
import FeedbackList from '@/widgets/feedback/ui/feedback-list'

export function PartFeedback() {
  const PART_FEEDBACK_LIST = mockFeedbackList.find((list) => list.type === 'PART')

  if (!PART_FEEDBACK_LIST) return null
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
          {question.type === FEEDBACK_ANSWER_TYPE.LIKERT && <FeedbackList.Likert />}
          {question.type === FEEDBACK_ANSWER_TYPE.OPEN_ENDED && (
            <FeedbackList.OpenEnded maxLength={500} />
          )}
        </>
      ))}
    </FeedbackList>
  )
}
