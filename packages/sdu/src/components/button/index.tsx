'use client'

import { OutlinedButton, SolidButton, TextButton } from '@repo/ui/server'
import { useRouter } from 'next/navigation'
import { ComponentPropsWithoutRef } from 'react'

import { serverDrivenFunction, ServerDrivenFunctionType } from '../../core/server-driven-function'

type Props = {
  onClick: ServerDrivenFunctionType
  text: string
  buttonType: 'solid' | 'outlined' | 'text'
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

function SDUButton({ onClick, text, buttonType, ...props }: Props) {
  const router = useRouter()

  const handleClick = () => {
    serverDrivenFunction(onClick, router)
  }

  if (buttonType === 'solid') {
    return (
      <SolidButton
        {...props}
        onClick={handleClick}>
        {text}
      </SolidButton>
    )
  }
  if (buttonType === 'outlined') {
    return (
      <OutlinedButton
        {...props}
        onClick={handleClick}>
        {text}
      </OutlinedButton>
    )
  }
  if (buttonType === 'text') {
    return (
      // @ts-expect-error - size 값을 읽지 못해 생기는 에러, 실제로는 잘 작동합니다.
      <TextButton
        {...props}
        onClick={handleClick}>
        {text}
      </TextButton>
    )
  }
}

export default SDUButton
