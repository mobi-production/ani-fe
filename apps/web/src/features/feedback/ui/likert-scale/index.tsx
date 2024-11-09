import { ComponentProps, MouseEvent, createContext, useContext, useState } from 'react'
import { LikertScaleType } from '../../model/likert-scale'

type LikertScaleProps = ComponentProps<'div'> & {
  defaultValue?: LikertScaleType
}

type LikertScaleContextType = {
  currentScore: LikertScaleType
  onChange: (score: LikertScaleType) => void
}

const ProgressStepContext = createContext<LikertScaleContextType | null>(null)

function LikertScale({ children, defaultValue, ...props }: LikertScaleProps) {
  const [currentScore, setCurrentScore] = useState<LikertScaleType>(defaultValue ?? undefined)

  return (
    <ProgressStepContext.Provider value={{ currentScore, onChange: setCurrentScore }}>
      <div
        className='flex justify-between'
        {...props}>
        {children}
      </div>
    </ProgressStepContext.Provider>
  )
}

type LikertScaleItemProps = ComponentProps<'div'> & {
  scoreValue: number
}

function OneScore({ scoreValue, onClick, ...props }: LikertScaleItemProps) {
  const context = useContext(ProgressStepContext)

  if (!context) {
    throw new Error('LikertScaleContext must be used within a LikertScale')
  }

  const { currentScore, onChange } = context
  const isCurrentStep = currentScore === scoreValue

  const handleClickStep = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    onChange(scoreValue)
    onClick?.(event)
  }

  return (
    <div
      className='z-10 mx-[-1rem] flex flex-col gap-2'
      onClick={handleClickStep}>
      <div className='text-center'>
        <span className='text-l-normal font-medium text-neutral-30'>{scoreValue}</span>
      </div>
      <div
        className={`m-auto flex h-[18px] w-[18px] cursor-pointer items-center justify-between rounded-full border-2 border-label-neutral ${isCurrentStep ? 'bg-label-alternative' : 'bg-background-alternative'}`}></div>
    </div>
  )
}

function ScoreIndicatorText() {
  return <div className='mt-10 h-0 flex-grow border-[1.5px] border-label-neutral'></div>
}

LikertScale.Score = OneScore
LikertScale.IndicatorText = ScoreIndicatorText

export default LikertScale
