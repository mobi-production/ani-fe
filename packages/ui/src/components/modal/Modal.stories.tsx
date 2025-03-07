import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { SolidButton } from '../button'
import Modal from '.'

const meta = {
  title: 'MDS/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `모달 컴포넌트입니다.
        
기본적으로 portal 컨테이너 위에 렌더링됩니다. 없을 경우 body 위에 렌더링됩니다.

### 사용법

\`\`\`tsx
<Modal isOpen={true} onClose={() => {}}>
  <div>모달 내부 컨텐츠</div>
</Modal>
\`\`\`

- withBackDrop 옵션을 추가하면 배경을 눌러 모달을 닫을 수 있습니다.
- withCloseButton 옵션을 추가하면 닫기 버튼을 추가할 수 있습니다.

⚠️ 두개의 속성을 추가하지 않았을 경우 개별로 onClose 함수를 호출해야 모달을 닫을 수 있습니다.
        `
      }
    },
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    withBackDrop: true,
    withCloseButton: true,
    isOpen: false,
    onClose: () => {}
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <SolidButton onClick={() => setIsOpen(true)}>모달 열기</SolidButton>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}>
          <div className='w-[20rem]'>모달 내부 컨텐츠</div>
        </Modal>
      </>
    )
  }
}

export const Simple: Story = {
  args: {
    withBackDrop: false,
    withCloseButton: false,
    isOpen: false,
    onClose: () => {}
  },
  parameters: {
    backgrounds: {
      default: 'gray-background',
      values: [{ name: 'gray-background', value: '#f0f0f0' }]
    }
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <SolidButton onClick={() => setIsOpen(true)}>모달 열기</SolidButton>
        <Modal
          {...args}
          withBackDrop
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}>
          <div className='w-[20rem]'>모달 내부 컨텐츠</div>
        </Modal>
      </>
    )
  }
}
