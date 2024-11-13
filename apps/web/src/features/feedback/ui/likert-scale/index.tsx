import { ComponentProps, MouseEvent, createContext, useContext, useMemo, useState } from 'react'
import { LikertScaleType, SCORE_INDICATOR_TEXT_MAP } from '../../model/likert-scale'
import { cva } from 'class-variance-authority'
import { Typography } from '@repo/ui/server'
import cn from '@repo/util/cn'

const likertScaleVariants = cva(
  'm-auto flex h-[3.8rem] w-[3.8rem] cursor-pointer items-center rounded-full justiy-center font-semibold',
  {
    variants: {
      isSelectedScore: {
        true: 'bg-primary-normal',
        false: 'border-[0.063rem] border-label-assistive'
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
        className='flex gap-9'
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
      className='z-10 flex flex-col gap-4'
      onClick={handleClickScore}>
      <ScoreIndicatorText
        scoreValue={scoreValue}
        isReverseCoded={isReverseCoded}
      />
      <div className={cn(likertScaleVariants({ isSelectedScore }), className)}>
        <Typography
          asChild
          variant='heading-2'
          fontWeight='semibold'
          color={isSelectedScore ? 'normal' : 'assistive'}>
          <div className='w-full text-center'>{scoreValue}</div>
        </Typography>
      </div>
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
    <div className='h-5 text-center'>
      <Typography
        variant='label-normal'
        fontWeight='medium'
        color='assistive'>
        {indicatorText}
      </Typography>
    </div>
  )
}

LikertScale.Score = OneScore
LikertScale.IndicatorText = ScoreIndicatorText

export default LikertScale
