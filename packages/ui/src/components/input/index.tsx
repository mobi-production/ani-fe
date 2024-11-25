import cn from '@repo/util/cn'
import { ComponentProps, forwardRef, ReactNode, useState } from 'react'

import Flex from '../flex'
import Icon from '../icon'
import Typography from '../typography'

type InputProps = ComponentProps<'input'> & {
  isError?: boolean
  errorMessage?: string
  isSuccess?: boolean
  successMessage?: string
  rightIcon?: ReactNode
  leftIcon?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isError = false,
      errorMessage,
      isSuccess = false,
      successMessage,
      rightIcon,
      leftIcon,
      className,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)

    if (isError && isSuccess) {
      throw new Error('Input 컴포넌트에서 isError와 isSuccess는 동시에 true일 수 없습니다.')
    }

    return (
      <Flex
        direction='column'
        gap={8}>
        <div
          className={cn(
            'flex items-center justify-between rounded-[0.5rem] border-[1.5px] border-transparent px-[1.25rem] py-[0.69rem]',
            isFocused && 'border-[1.5px] border-neutral-10',
            isError && 'border-[1.5px] border-status-error'
          )}
          style={{ backgroundColor: 'rgba(23, 23, 23, 0.03)' }}>
          {leftIcon && <div>{leftIcon}</div>}
          <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            ref={ref}
            className={cn(
              'flex-1 border-none bg-transparent text-b1-normal font-medium text-neutral-10 placeholder-label-assistive outline-none placeholder:text-b1-normal placeholder:font-medium',
              className
            )}
            {...props}
          />
          {rightIcon && <div>{rightIcon}</div>}
        </div>
        {isError && (
          <Flex
            gap={4}
            align='center'
            className='text-status-error'>
            <Icon
              size={14}
              name='ExclamationCircleOutlined'
            />
            <Typography
              color='inherit'
              variant='label-normal'
              fontWeight='regular'>
              {errorMessage}
            </Typography>
          </Flex>
        )}
        {isSuccess && (
          <Flex
            gap={4}
            align='center'
            className='text-status-success'>
            <Icon
              size={14}
              name='ExclamationCircleOutlined'
            />
            <Typography
              color='inherit'
              variant='label-normal'
              fontWeight='regular'>
              {successMessage}
            </Typography>
          </Flex>
        )}
      </Flex>
    )
  }
)

Input.displayName = 'Input'

export default Input
