'use client'

import { Flex, Modal, Typography } from '@repo/ui/server'
import { useAuthModalStore } from '../../store'

function SignupModal() {
  const isSignupModalOpen = useAuthModalStore((state) => state.isSignupModalOpen)
  const setIsSignupModalOpen = useAuthModalStore((state) => state.setIsSignupModalOpen)

  const onCloseSignupModal = () => {
    setIsSignupModalOpen(false)
  }

  return (
    <Modal
      className='p-0'
      withCloseButton={false}
      withBackDrop
      isOpen={isSignupModalOpen}
      onClose={onCloseSignupModal}>
      <Flex>
        <Typography>SignupModal</Typography>
      </Flex>
    </Modal>
  )
}

export default SignupModal
