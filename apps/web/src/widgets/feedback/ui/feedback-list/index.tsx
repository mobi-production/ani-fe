import Typography from '@repo/ui/typography'
import LikertScale from '../likert-scale'
import { ComponentProps } from 'react'
import { LIKERT_SCALE_MAX_SCORE } from '../../config/likert-scale'
import SpacingBlock from '@repo/ui/spacing-block'
import TextArea from '@repo/ui/text-area'

type FeedbackListProps = ComponentProps<'div'>

function FeedbackList({ children, ...props }: FeedbackListProps) {
  return <div {...props}>{children}</div>
}

type ListTitleProps = ComponentProps<'div'> & {
  courseName: string
  category: string
}

function ListTitle({ courseName, category, ...props }: ListTitleProps) {
  return (
    <div {...props}>
      <Typography
        variant='heading-2'
        fontWeight='semibold'
        color='normal'>
        {courseName}
      </Typography>
      <Typography
        variant='heading-2'
        fontWeight='semibold'
        color='normal'>
        {category} 피드백
      </Typography>
    </div>
  )
}

type QuestionTitleProps = ComponentProps<'div'> & {
  questionIndex: number
  title: string
}

function QuestionTitle({ questionIndex, title, ...props }: QuestionTitleProps) {
  const titleValue = `Q${questionIndex}. ${title}`
  return (
    <div {...props}>
      <Typography
        variant='heading-2'
        fontWeight='semibold'
        color='normal'>
        {titleValue}
      </Typography>
      <SpacingBlock
        size={'4r'}
        className='border-none'
      />
    </div>
  )
}

type LikertScaleResponseProps = ComponentProps<'div'> & {
  defaultValue?: number
}

function LikertScaleResponse({ defaultValue, ...props }: LikertScaleResponseProps) {
  return (
    <LikertScale
      defaultValue={defaultValue}
      {...props}>
      {Array.from({ length: LIKERT_SCALE_MAX_SCORE }, (_, index) => (
        <LikertScale.Score
          key={index}
          scoreValue={index + 1}
          isReverseCoded={false}
        />
      ))}
    </LikertScale>
  )
}

type OpenEndedResponseProps = {
  placeholder?: string
  maxLength?: number
}

function OpenEndedResponse({ placeholder, maxLength, ...props }: OpenEndedResponseProps) {
  return (
    <TextArea
      maxLength={maxLength}
      {...props}>
      <TextArea.form
        placeholder={placeholder}
        className='h-[12.5rem] w-[31.5rem] p-4'
      />
      <TextArea.indicator />
    </TextArea>
  )
}

FeedbackList.ListTitle = ListTitle
FeedbackList.QuestionTitle = QuestionTitle
FeedbackList.Likert = LikertScaleResponse
FeedbackList.OpenEnded = OpenEndedResponse

export default FeedbackList
