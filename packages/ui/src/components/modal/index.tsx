import { ComponentProps, forwardRef, Fragment } from 'react'

import Flex from '../flex'
import Icon from '../icon'

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

const Overlay = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-background-normal p-4 ${className}`}>
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

type ModalProps = BasicModalProps & {
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
  children
}: ModalProps) {
  if (!isOpen) return null
  return (
    <Fragment>
      <BackDrop
        onClose={onClose}
        isRendered={withBackDrop}
      />
      <Overlay className={className}>
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