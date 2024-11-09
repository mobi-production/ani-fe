import { FEEDBACK_STEP, FeedbackStepType } from '@/types/feedback/feedback-step'
import { ComponentProps, MouseEvent, createContext, useContext, useState } from 'react'

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

function OneStep({ stepLabel, stepValue, onClick, ...props }: FeedbackStepItemProps) {
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
        <span className='text-l-normal font-medium text-neutral-30'>{stepLabel}</span>
      </div>
      <div
        className={`m-auto flex h-[18px] w-[18px] cursor-pointer items-center justify-between rounded-full border-2 border-label-neutral ${isCurrentStep ? 'bg-label-alternative' : 'bg-background-alternative'}`}></div>
    </div>
  )
}

function StepDivider() {
  return <div className='mt-10 h-0 flex-grow border-[1.5px] border-label-neutral'></div>
}

FeedbackStep.Item = OneStep
FeedbackStep.Divider = StepDivider

export default FeedbackStep
