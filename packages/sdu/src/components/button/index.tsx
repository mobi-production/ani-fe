import { Icon } from '@repo/ui/client'
import { OutlinedButton, SolidButton, TextButton } from '@repo/ui/server'
import { ComponentPropsWithoutRef } from 'react'

import { serverDrivenFunction, ServerDrivenFunctionType } from '../../core/server-driven-function'

type Props = {
  text: string
  onClick: ServerDrivenFunctionType
  buttonType: 'solid' | 'outlined' | 'text'
  leftIcon?: ComponentPropsWithoutRef<typeof Icon>['name']
  rightIcon?: ComponentPropsWithoutRef<typeof Icon>['name']
} & (
  | ({
      buttonType: 'solid'
    } & Omit<ComponentPropsWithoutRef<typeof SolidButton>, 'onClick'>)
  | ({
      buttonType: 'outlined'
    } & Omit<ComponentPropsWithoutRef<typeof OutlinedButton>, 'onClick'>)
  | ({
      buttonType: 'text'
    } & Omit<ComponentPropsWithoutRef<typeof TextButton>, 'onClick'>)
)

function SDUButton({ onClick, text, buttonType, leftIcon, rightIcon, ...props }: Props) {
  const handleClick = () => {
    serverDrivenFunction(onClick)
  }

  if (buttonType === 'solid') {
    return (
      <SolidButton
        {...props}
        onClick={handleClick}>
        {leftIcon && <Icon name={leftIcon} />}
        {text}
        {rightIcon && <Icon name={rightIcon} />}
      </SolidButton>
    )
  }
  if (buttonType === 'outlined') {
    return (
      <OutlinedButton
        {...props}
        onClick={handleClick}>
        {leftIcon && <Icon name={leftIcon} />}
        {text}
        {rightIcon && <Icon name={rightIcon} />}
      </OutlinedButton>
    )
  }
  if (buttonType === 'text') {
    return (
      // @ts-expect-error - size 값을 읽지 못해 생기는 에러, 실제로는 잘 작동합니다.
      <TextButton
        {...props}
        onClick={handleClick}>
        {leftIcon && <Icon name={leftIcon} />}
        {text}
        {rightIcon && <Icon name={rightIcon} />}
      </TextButton>
    )
  }
}

export default SDUButton
