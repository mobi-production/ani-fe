import { cn } from '@repo/util'
import { cva } from 'class-variance-authority'
import { ChangeEvent, ComponentProps, createContext, useContext, useMemo, useState } from 'react'

import Typography from '../typography'
import { TextAreaVariants } from './variants'

type TextAreaProps = ComponentProps<'div'> & {
  defaultValue?: string
  maxLength?: number
}

type TextAreaContextType = {
  value: string | undefined
  onChange: (value: string) => void
  isOverLimitLength: boolean
  maxLength?: number
}

const textAreaVariants = cva(
  'resize-none rounded-[0.5rem] border-[0.094rem] bg-fill-alternative outline-none focus:border-label-normal placeholder:text-b1-normal placeholder:text-label-assistive',
  {
    variants: {
      variant: {
        [TextAreaVariants.ACTIVE]: 'border-label-assistive ',
        [TextAreaVariants.ERROR]: 'border-status-error'
      }
    },
    defaultVariants: {
      variant: TextAreaVariants.ACTIVE
    }
  }
)

const TextAreaContext = createContext<TextAreaContextType | undefined>(undefined)

function TextArea({ children, defaultValue, maxLength, ...props }: TextAreaProps) {
  const [value, setValue] = useState<string | undefined>(defaultValue ?? undefined)

  const isOverLimitLength = useMemo(
    () => (value?.length ?? 0) >= (maxLength ?? 0),
    [value, maxLength]
  )

  return (
    <TextAreaContext.Provider value={{ value, onChange: setValue, maxLength, isOverLimitLength }}>
      <div
        className='flex flex-col gap-2'
        {...props}>
        {children}
      </div>
    </TextAreaContext.Provider>
  )
}

type TextAreaFormProps = ComponentProps<'textarea'> & {
  placeholder?: string
}

function TextAreaForm({ placeholder, className, ...props }: TextAreaFormProps) {
  const context = useContext(TextAreaContext)
  if (!context) {
    throw new Error('useTextAreaContext must be used within a TextArea')
  }

  const { value, onChange, maxLength, isOverLimitLength } = context

  const handleChangeValue = (event: ChangeEvent<HTMLTextAreaElement>) =>
    onChange?.(event.currentTarget.value)

  return (
    <textarea
      value={value}
      onChange={handleChangeValue}
      placeholder={placeholder}
      maxLength={maxLength}
      className={cn(
        textAreaVariants({
          variant: isOverLimitLength ? TextAreaVariants.ERROR : TextAreaVariants.ACTIVE
        }),
        className
      )}
      {...props}
    />
  )
}

type CharCountIndicatorProps = ComponentProps<'div'>

function CharCountIndicator({ ...props }: CharCountIndicatorProps) {
  const context = useContext(TextAreaContext)
  if (!context) {
    throw new Error('useTextAreaContext must be used within a TextArea')
  }
  const { value, maxLength, isOverLimitLength } = context
  if (typeof maxLength !== 'number') return <></>

  return (
    <div
      className='text-right'
      {...props}>
      <Typography
        variant='body-1-normal'
        fontWeight='medium'
        color={isOverLimitLength ? 'error' : 'assistive'}>
        {value?.length ?? 0}/{maxLength}
      </Typography>
    </div>
  )
}

TextArea.indicator = CharCountIndicator
TextArea.form = TextAreaForm

export default TextArea
