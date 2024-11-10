import { ChangeEvent, ComponentProps, createContext, useContext, useState } from 'react'

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
        className='flex flex-col items-start gap-2'
        {...props}>
        {children}
      </div>
    </TextAreaContext.Provider>
  )
}

type TextAreaFormProps = ComponentProps<'textarea'> & {
  placeholder?: string
}

function TextAreaForm({ placeholder, ...props }: TextAreaFormProps) {
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
    <div {...props}>
      {value?.length ?? 0}/{maxLength}
    </div>
  )
}

TextArea.indicator = CharCountIndicator
TextArea.form = TextAreaForm

export default TextArea
