import LikertScale from '../likert-scale'
import { ComponentProps } from 'react'
import { LIKERT_SCALE_MAX_SCORE } from '../../config/likert-scale'
import { SpacingBlock, Typography } from '@repo/ui/server'
import { TextArea } from '@repo/ui/client'

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
      <SpacingBlock
        height={4}
        className='border-none'
      />
      <div>
        <Typography
          variant='body-2-normal'
          fontWeight='regular'
          color='normal'>
          {courseName}
        </Typography>
      </div>
      <div>
        <Typography
          variant='title-3'
          fontWeight='bold'
          color='normal'>
          {category} 피드백
        </Typography>
      </div>
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
    <div
      className='mb-3 mt-10'
      {...props}>
      <Typography
        variant='heading-2'
        fontWeight='semibold'
        color='normal'>
        {titleValue}
      </Typography>
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
    <div>
      <TextArea
        maxLength={maxLength}
        {...props}>
        <TextArea.form
          placeholder='의견을 자유롭게 적어주세요'
          className='min-h-[12.5rem] w-[31.5rem] p-4'
        />
        <TextArea.indicator />
      </TextArea>
    </div>
  )
}

FeedbackList.ListTitle = ListTitle
FeedbackList.QuestionTitle = QuestionTitle
FeedbackList.Likert = LikertScaleResponse
FeedbackList.OpenEnded = OpenEndedResponse

export default FeedbackList
