import { cn } from '@repo/util'
import { ChangeEvent, ComponentProps, createContext, useContext, useState } from 'react'

import Typography from '../typography'

type TextAreaProps = ComponentProps<'div'> & {
  defaultValue?: string
}

type TextAreaContextType = {
  value: string | undefined
  onChange: (value: string) => void
}

const TextAreaContext = createContext<TextAreaContextType | undefined>(undefined)

function TextArea({ children, defaultValue, ...props }: TextAreaProps) {
  const [value, setValue] = useState<string | undefined>(defaultValue ?? undefined)

  return (
    <TextAreaContext.Provider value={{ value, onChange: setValue }}>
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
  maxLength?: number
}

function TextAreaForm({ placeholder, maxLength, className, ...props }: TextAreaFormProps) {
  const context = useContext(TextAreaContext)
  if (!context) {
    throw new Error('useTextAreaContext must be used within a TextArea')
  }

  const { value, onChange } = context

  const handleChangeValue = (event: ChangeEvent<HTMLTextAreaElement>) =>
    onChange?.(event.currentTarget.value)

  return (
    <textarea
      value={value}
      onChange={handleChangeValue}
      placeholder={placeholder}
      maxLength={maxLength}
      className={cn(
        'resize-none rounded-[0.5rem] border-[0.094rem] outline-none',
        'border-label-assistive focus:border-label-normal',
        'placeholder:text-b1-normal placeholder:text-label-assistive',
        className
      )}
      {...props}
    />
  )
}

type CharCountIndicatorProps = ComponentProps<'div'> & {
  maxLength?: number
}

function CharCountIndicator({ maxLength, ...props }: CharCountIndicatorProps) {
  const context = useContext(TextAreaContext)
  if (!context) {
    throw new Error('useTextAreaContext must be used within a TextArea')
  }
  if (typeof maxLength !== 'number') return <></>

  const { value } = context

  return (
    <div
      className='text-right'
      {...props}>
      <Typography
        variant='body-1-normal'
        fontWeight='medium'
        color='assistive'>
        {value?.length ?? 0}/{maxLength}
      </Typography>
    </div>
  )
}

TextArea.indicator = CharCountIndicator
TextArea.form = TextAreaForm

export default TextArea
