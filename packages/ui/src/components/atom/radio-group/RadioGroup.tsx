import { ComponentProps, createContext, useContext, useState } from 'react'

type RadioGroupProps = ComponentProps<'div'> & {
  defaultValue?: string
}

type RadioGroupContextType = {
  value: string | null
  onChange: (value: string) => void
}

const RadioGroupContext = createContext<RadioGroupContextType | null>(null)

function RadioGroup({ children, defaultValue, ...props }: RadioGroupProps) {
  const [value, setValue] = useState<string | null>(defaultValue ?? null)

  return (
    <RadioGroupContext.Provider value={{ value, onChange: setValue }}>
      <div
        className='flex flex-col items-start gap-3'
        {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

type RadioGroupItemProps = ComponentProps<'input'> & {
  label: string
}

function RadioGroupItem({ label, ...props }: RadioGroupItemProps) {
  const context = useContext(RadioGroupContext)
  if (!context) {
    throw new Error('useRadioGroupContext must be used within a RadioGroup')
  }
  const checked = context.value === props.value

  return (
    <label className='flex w-full cursor-pointer items-center justify-between rounded border border-[#000000] p-4'>
      <span className='text-b2-normal'>{label}</span>
      <input
        className='custom-radio'
        onChange={(e) => context.onChange(e.target.value)}
        checked={checked}
        type='radio'
        {...props}
      />
    </label>
  )
}

RadioGroup.Item = RadioGroupItem

export default RadioGroup
