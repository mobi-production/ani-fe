import cn from '@repo/util/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentProps, forwardRef, Fragment } from 'react'

import Flex from '../flex'
import Icon from '../icon'
import { ModalRounded, ModalXPosition } from './variants'

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
        className={`fixed inset-0 bg-neutral-10/60 ${className}`}
        onClick={onClose}
        {...props}></div>
    )
  }
)

BackDrop.displayName = 'BackDrop'

export const overlayVariants = cva(
  'fixed top-1/2 -translate-y-1/2 transform bg-background-normal p-4',
  {
    variants: {
      rounded: {
        [ModalRounded.SMALL]: 'rounded',
        [ModalRounded.NORMAL]: 'rounded-2xl'
      },
      xPosition: {
        [ModalXPosition.LEFT]: 'left-0',
        [ModalXPosition.CENTER]: 'left-1/2 -translate-x-1/2',
        [ModalXPosition.RIGHT]: 'right-0'
      }
    },
    defaultVariants: {
      rounded: ModalRounded.NORMAL,
      xPosition: ModalXPosition.CENTER
    }
  }
)

type OverlayProps = VariantProps<typeof overlayVariants> & ComponentProps<'div'>

const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  ({ xPosition, rounded, className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(overlayVariants({ rounded, xPosition }), className)}>
        {children}
      </div>
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
  rounded,
  xPosition
}: ModalProps) {
  if (!isOpen) return null
  return (
    <Fragment>
      <BackDrop
        onClose={onClose}
        isRendered={withBackDrop}
      />
      <Overlay
        className={className}
        rounded={rounded}
        xPosition={xPosition}>
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
