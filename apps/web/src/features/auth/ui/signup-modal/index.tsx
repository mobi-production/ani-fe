'use client'

import { Flex, Modal, Typography } from '@repo/ui/server'
import { useState } from 'react'

function SignupModal() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Modal
      className='p-0'
      withCloseButton={false}
      withBackDrop
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false)
      }}>
      <Flex>
        <Typography>SignupModal</Typography>
      </Flex>
    </Modal>
  )
}

export default SignupModal
