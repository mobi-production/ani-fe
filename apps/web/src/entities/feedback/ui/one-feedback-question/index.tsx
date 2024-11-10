import Typography from '@repo/ui/typography'
import { FEEDBACK_RESPONSE_CATEGORY, FeedbackResponseCategoryType } from '../../model/feedback'
import LikertScale from '../likert-scale'
import { ComponentProps } from 'react'
import { LIKERT_SCALE_MAX_SCORE } from '../../config/likert-scale'
import SpacingBlock from '@repo/ui/spacing-block'

type OneFeedbackQuestionProps = ComponentProps<'div'> & {
  questionIndex: number
  responseCategory: FeedbackResponseCategoryType
  title: string
}

function OneFeedbackQuestion({
  questionIndex,
  responseCategory = 'LIKERT',
  title,
  ...props
}: OneFeedbackQuestionProps) {
  return (
    <div>
      <QuestionTitle
        questionIndex={questionIndex}
        title={title}
      />
      <SpacingBlock
        size={'4r'}
        className='border-none'
      />
      <Answer responseCategory={responseCategory} />
    </div>
  )
}

type QuestionTitleProps = ComponentProps<'div'> & {
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

type AnswerProps = ComponentProps<'div'> & {
  responseCategory: FeedbackResponseCategoryType
}

function Answer({ responseCategory }: AnswerProps) {
  if (responseCategory === FEEDBACK_RESPONSE_CATEGORY.OPEN_ENDED) return <></>

  return (
    <LikertScale>
      <LikertScale>
        {Array.from({ length: LIKERT_SCALE_MAX_SCORE }, (_, index) => (
          <LikertScale.Score
            key={index}
            scoreValue={index + 1}
            isReverseCoded={false}
          />
        ))}
      </LikertScale>
    </LikertScale>
  )
}

OneFeedbackQuestion.title = QuestionTitle
OneFeedbackQuestion.answer = Answer
export default OneFeedbackQuestion
