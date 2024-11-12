import { ComponentProps, MouseEvent, createContext, useContext, useState } from 'react'
import { FEEDBACK_STEP, FeedbackStepType } from '../../model/feedback-step'
import { cn } from '@repo/util'
import { cva } from 'class-variance-authority'
import { Typography } from '@ui/static-components'

const feedbackStepVariants = cva(
  'm-auto flex h-[1.125rem] w-[1.125rem] cursor-pointer items-center justify-between rounded-full border-2 border-label-neutral',
  {
    variants: {
      isCurrentStep: {
        true: 'bg-label-alternative',
        false: 'bg-background-alternative'
      }
    }
  }
)

type FeedbackStepProps = ComponentProps<'div'> & {
  defaultValue?: FeedbackStepType
}

type FeedbackStepContextType = {
  currentStep: FeedbackStepType
  onChange: (value: FeedbackStepType) => void
}

const ProgressStepContext = createContext<FeedbackStepContextType | null>(null)

function FeedbackStep({ children, defaultValue, ...props }: FeedbackStepProps) {
  const [currentStep, setCurrentStep] = useState<FeedbackStepType>(
    defaultValue ?? FEEDBACK_STEP.PART.VALUE
  )

  return (
    <ProgressStepContext.Provider value={{ currentStep, onChange: setCurrentStep }}>
      <div
        className='flex justify-between'
        {...props}>
        {children}
      </div>
    </ProgressStepContext.Provider>
  )
}

type FeedbackStepItemProps = ComponentProps<'div'> & {
  stepLabel: string
  stepValue: FeedbackStepType
}

function OneStep({ stepLabel, stepValue, className, onClick, ...props }: FeedbackStepItemProps) {
  const context = useContext(ProgressStepContext)

  if (!context) {
    throw new Error('FeedbackStepContext must be used within a FeedbackStep')
  }

  const { currentStep, onChange } = context
  const isCurrentStep = currentStep === stepValue
  const handleClickStep = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    onChange(stepValue)
    onClick?.(event)
  }

  return (
    <div
      className='z-10 mx-[-1rem] flex flex-col gap-2'
      onClick={handleClickStep}>
      <div className='text-center'>
        <Typography
          variant='label-normal'
          fontWeight='medium'
          color='neutral'>
          {stepLabel}
        </Typography>
      </div>
      <div className={cn(feedbackStepVariants({ isCurrentStep }), className)}></div>
    </div>
  )
}

function StepDivider() {
  return <div className='mt-10 h-0 flex-grow border-[0.094rem] border-label-neutral'></div>
}

FeedbackStep.Item = OneStep
FeedbackStep.Divider = StepDivider

export default FeedbackStep
