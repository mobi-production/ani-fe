import RadioBtn from '@repo/ui/components/radio-btn'
import { Flex, Typography } from '@repo/ui/server'
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
      <Flex
        align={'start'}
        direction={'column'}
        gap={12}
        {...props}>
        {children}
      </Flex>
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
    <Flex
      asChild
      align={'center'}
      justify={'between'}>
      <label className='w-full cursor-pointer rounded border border-common0 p-4'>
        <Typography variant='body-2-normal'>{label}</Typography>
        <RadioBtn
          type='radio'
          onChange={(e) => context.onChange(e.target.value)}
          checked={checked}
          {...props}
        />
      </label>
    </Flex>
  )
}

RadioGroup.Item = RadioGroupItem

export default RadioGroup
