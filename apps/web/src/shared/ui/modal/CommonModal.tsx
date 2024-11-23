import { Modal, SolidButton, Typography } from '@repo/ui/server'
import { ComponentProps, useMemo } from 'react'
import Portal from './Portal'
import cn from '@repo/util/cn'
import { Icon, IconsMap } from '@repo/ui/client'
import Image from 'next/image'
import { cva, type VariantProps } from 'class-variance-authority'
import { IconVariantType } from '@repo/ui/components/icon/variants'

export const ICON_THEME = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  NORMAL: 'NORMAL'
} as const

type IconProps = {
  iconTheme: keyof typeof ICON_THEME
  iconName?: IconVariantType
}

const iconVariants = cva(
  'mb-[3rem] relative flex h-[3.75rem] w-[3.75rem] justify-center rounded-full',
  {
    variants: {
      theme: {
        [ICON_THEME.SUCCESS]: 'bg-green-95',
        [ICON_THEME.ERROR]: 'bg-red-95',
        [ICON_THEME.NORMAL]: 'bg-fill-alternative'
      }
    },
    defaultVariants: {
      theme: ICON_THEME.NORMAL
    }
  }
)

function ModalIcon({ iconTheme, iconName }: IconProps) {
  if (iconTheme !== 'SUCCESS' && iconTheme !== 'ERROR' && !iconName) return null
  const icon = useMemo(() => {
    switch (iconTheme) {
      case 'SUCCESS':
        return (
          <div className='relative m-auto flex h-[2rem] w-[2em] flex-col'>
            <Image
              src='/svg/success.svg'
              alt='success'
              fill
            />
          </div>
        )
      case 'ERROR':
        return (
          <Icon
            name='ExclamationOutlined'
            className='text-[2.375rem] text-status-error'
          />
        )
      default:
        return (
          <Icon
            name={iconName ?? 'ExclamationOutlined'}
            className='text-[2rem]'
          />
        )
    }
  }, [iconTheme])

  return <div className={iconVariants({ theme: iconTheme })}>{icon}</div>
}

type ChildrenProps = PropsNeedChildren & ComponentProps<'div'>

function Title({ className, children }: ChildrenProps) {
  return (
    <Typography
      variant={'title-2'}
      fontWeight={'bold'}
      color='normal'
      className={className}>
      {children}
    </Typography>
  )
}

function Description({ className, children }: ChildrenProps) {
  return (
    <Typography
      variant={'body-1-normal'}
      fontWeight={'medium'}
      color='alternative'
      className={cn('mt-[0.75rem]', className)}>
      {children}
    </Typography>
  )
}

type ButtonProps = {
  buttonText: string
} & ComponentProps<'button'>

function Button({ buttonText, onClick }: ButtonProps) {
  return (
    <div className='mt-[3rem] flex w-full justify-center'>
      <SolidButton
        onClick={onClick}
        variant='primary'
        size={'large'}
        className='w-[25rem]'>
        {buttonText}
      </SolidButton>
    </div>
  )
}

type ButtonSetProps = {
  primaryText: string
  subText: string
  onSubmit: () => void | Promise<void>
  onCancel: () => void
} & ComponentProps<'button'>

function ButtonSet({ primaryText, subText, onSubmit, onCancel }: ButtonSetProps) {
  return (
    <div className='mt-[3rem] flex justify-center gap-2'>
      <SolidButton
        onClick={onCancel}
        variant='secondary'
        size={'large'}
        className='w-[12.25rem]'>
        {subText}
      </SolidButton>
      <SolidButton
        onClick={onSubmit}
        variant='primary'
        size={'large'}
        className='w-[12.25rem]'>
        {primaryText}
      </SolidButton>
    </div>
  )
}

type Props = {
  isOpen: boolean
  onClose: () => void
  withBackDrop?: boolean
  withCloseButton?: boolean
} & ComponentProps<'div'>

function CommonModal({ isOpen, onClose, className, children }: Props) {
  return (
    <Portal>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className={cn(
          'flex w-[37.5rem] flex-col items-center justify-center px-[2.25rem] py-[3rem] text-center',
          className
        )}>
        {children}
      </Modal>
    </Portal>
  )
}

CommonModal.icon = ModalIcon
CommonModal.title = Title
CommonModal.description = Description
CommonModal.button = Button
CommonModal.buttonSet = ButtonSet

export default CommonModal
