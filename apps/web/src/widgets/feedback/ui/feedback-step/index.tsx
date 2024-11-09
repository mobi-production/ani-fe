import { ComponentProps, createContext, useContext, useState } from 'react'

type FeedbackStepProps = ComponentProps<'div'> & {
  defaultValue?: string
}

type FeedbackStepContextType = {
  value: string | null
  onChange: (value: string) => void
}

const ProgressStepContext = createContext<FeedbackStepContextType | null>(null)

function FeedbackStep({ children, defaultValue, ...props }: FeedbackStepProps) {
  const [value, setValue] = useState<string | null>(defaultValue ?? null)

  return (
    <ProgressStepContext.Provider value={{ value, onChange: setValue }}>
      <div
        className='flex justify-between'
        {...props}>
        {children}
      </div>
    </ProgressStepContext.Provider>
  )
}

type FeedbackStepItemProps = ComponentProps<'div'> & {
  label: string
  value: string
}

function OneStep({ label, value, onClick, ...props }: FeedbackStepItemProps) {
  const context = useContext(ProgressStepContext)

  if (!context) {
    throw new Error('FeedbackStepContext must be used within a FeedbackStep')
  }
  const isCurrentStep = context.value === value

  return (
    <div
      className='z-10 mx-[-1rem] flex flex-col gap-2'
      onClick={(event) => onClick?.(event)}>
      <div className='text-center'>
        <span className='text-l-normal font-medium text-neutral-30'>{label}</span>
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
