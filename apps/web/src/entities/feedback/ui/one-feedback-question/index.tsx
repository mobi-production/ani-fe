import Typography from '@repo/ui/typography'

type OneFeedbackQuestionProps = {
  questionIndex: number
  questionType: ''
  title: string
}

function OneFeedbackQuestion() {
  return <div></div>
}

type QuestionTitleProps = {
  questionIndex: number
  title: string
}

function QuestionTitle({ questionIndex, title }: QuestionTitleProps) {
  const titleValue = `Q${questionIndex}. ${title}`
  return (
    <div>
      <Typography
        variant='heading-2'
        fontWeight='semibold'
        color='normal'>
        {titleValue}
      </Typography>
    </div>
  )
}

OneFeedbackQuestion.title = QuestionTitle
export default OneFeedbackQuestion
