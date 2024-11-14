import FeedbackList from './feedback-list'

export function MentoFeedback() {
  return (
    <div>
      <FeedbackList>
        <FeedbackList.ListTitle
          courseName='HTML 개요(1)'
          category='멘토'
        />
        <FeedbackList.QuestionTitle
          questionIndex={1}
          title='파트의 내용이 기대에 부합했나요?'
        />
        <FeedbackList.Likert />
        <FeedbackList.QuestionTitle
          questionIndex={2}
          title='추가로 파트에 대해 남기고 싶은 의견이 있다면 자유롭게 기재해주세요.'
        />
        <FeedbackList.OpenEnded maxLength={500} />
      </FeedbackList>
    </div>
  )
}
