import { ComponentProps, MouseEvent, createContext, useContext, useMemo, useState } from 'react'
import { LikertScaleType, SCORE_INDICATOR_TEXT_MAP } from '../../model/likert-scale'
import { cn } from '@repo/util'
import { cva } from 'class-variance-authority'

const likertScaleVariants = cva(
  'm-auto flex h-[3.8rem] w-[3.8rem] cursor-pointer items-center justify-between rounded-full border-2 border-label-neutral',
  {
    variants: {
      isSelectedScore: {
        true: 'bg-label-alternative',
        false: 'bg-background-alternative'
      }
    }
  }
)

type LikertScaleProps = ComponentProps<'div'> & {
  defaultValue?: LikertScaleType
}

type LikertScaleContextType = {
  selectedScore: LikertScaleType
  onChange: (score: LikertScaleType) => void
}

const LikertScaleContext = createContext<LikertScaleContextType | null>(null)

function LikertScale({ children, defaultValue, ...props }: LikertScaleProps) {
  const [selectedScore, setSelectedScore] = useState<LikertScaleType>(defaultValue ?? undefined)

  return (
    <LikertScaleContext.Provider value={{ selectedScore, onChange: setSelectedScore }}>
      <div
        className='flex justify-between'
        {...props}>
        {children}
      </div>
    </LikertScaleContext.Provider>
  )
}

type LikertScaleItemProps = ComponentProps<'div'> & {
  scoreValue: number
  isReverseCoded: boolean
}

function OneScore({
  scoreValue,
  onClick,
  className,
  isReverseCoded = false,
  ...props
}: LikertScaleItemProps) {
  const context = useContext(LikertScaleContext)

  if (!context) {
    throw new Error('LikertScaleContext must be used within a LikertScale')
  }

  const { selectedScore, onChange } = context
  const isSelectedScore = selectedScore === scoreValue

  const handleClickScore = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    onChange(scoreValue)
    onClick?.(event)
  }

  return (
    <div
      className='z-10 mx-[-1rem] flex flex-col gap-2'
      onClick={handleClickScore}>
      <ScoreIndicatorText
        scoreValue={scoreValue}
        isReverseCoded={isReverseCoded}
      />
      <div className={cn(likertScaleVariants({ isSelectedScore }), className)}>{scoreValue}</div>
    </div>
  )
}

type ScoreIndicatorTextProps = {
  scoreValue: number
  isReverseCoded: boolean
}

function ScoreIndicatorText({ scoreValue, isReverseCoded }: ScoreIndicatorTextProps) {
  const indicatorText = useMemo(() => {
    const text = SCORE_INDICATOR_TEXT_MAP[scoreValue]
    return text ? text(isReverseCoded) : ''
  }, [scoreValue, isReverseCoded])

  return (
    <div className='text-center'>
      <span className='text-l-normal font-medium text-neutral-30'>{indicatorText}</span>
    </div>
  )
}

LikertScale.Score = OneScore
LikertScale.IndicatorText = ScoreIndicatorText

export default LikertScale
