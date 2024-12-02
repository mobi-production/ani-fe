import cn from '@repo/util/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentProps, forwardRef, Fragment, useEffect } from 'react'

import { usePortal } from '../../hooks/use-portal'
import Flex from '../flex'
import Icon from '../icon'
import { ModalRounded } from './variants'

type BasicModalProps = ComponentProps<'div'> & {
  onClose: () => void
}

type OptionalModalProps = BasicModalProps & {
  isRendered: boolean
}

const BackDrop = forwardRef<HTMLDivElement, OptionalModalProps>(
  ({ isRendered, onClose, className, ...props }, ref) => {
    if (!isRendered) return null

    return (
      <div
        ref={ref}
        className={`pointer-events-auto fixed inset-0 bg-neutral-10/60 ${className}`}
        onClick={onClose}
        {...props}></div>
    )
  }
)

BackDrop.displayName = 'BackDrop'

export const overlayVariants = cva(
  'pointer-events-auto left-1/2 -translate-x-1/2 fixed top-1/2 -translate-y-1/2 transform bg-background-normal p-4',
  {
    variants: {
      rounded: {
        [ModalRounded.SMALL]: 'rounded',
        [ModalRounded.NORMAL]: 'rounded-2xl'
      }
    },
    defaultVariants: {
      rounded: ModalRounded.NORMAL
    }
  }
)

type OverlayProps = VariantProps<typeof overlayVariants> & ComponentProps<'div'>

const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  ({ rounded, className, children }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(overlayVariants({ rounded }), className)}>
        {children}
      </aside>
    )
  }
)

Overlay.displayName = 'Overlay'

function Close({ onClose, isRendered }: OptionalModalProps) {
  if (!isRendered) return null
  return (
    <Flex justify='end'>
      <Icon
        name='CloseOutlined'
        onClick={onClose}
        size={14}
      />
      <span className='sr-only'>Close</span>
    </Flex>
  )
}

type ModalProps = VariantProps<typeof overlayVariants> &
  BasicModalProps & {
    isOpen: boolean
    withBackDrop?: boolean
    withCloseButton?: boolean
  }

function Modal({
  withBackDrop = true,
  withCloseButton = false,
  isOpen,
  onClose,
  className,
  children,
  rounded
}: ModalProps) {
  const { renderInPortal } = usePortal()

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollBarWidth}px`
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
  }, [isOpen])

  if (!isOpen) return null

  return renderInPortal(
    <Fragment>
      <BackDrop
        onClose={onClose}
        isRendered={withBackDrop}
      />
      <Overlay
        className={className}
        rounded={rounded}>
        <Close
          onClose={onClose}
          isRendered={withCloseButton}
        />
        {children}
      </Overlay>
    </Fragment>
  )
}

Modal.backDrop = BackDrop
Modal.overlay = Overlay
Modal.close = Close

export default Modal
