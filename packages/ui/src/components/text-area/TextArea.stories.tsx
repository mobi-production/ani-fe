import type { Meta, StoryObj } from '@storybook/react'

import TextArea from '.'

const meta = {
  title: 'MDS/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    defaultValue: ''
  },

  render: (args) => (
    <div>
      <TextArea {...args}>
        <TextArea.form
          placeholder='취소 사유를 입력해주세요'
          className='h-[12.5rem] w-[31.5rem] p-4'
          maxLength={500}
        />
      </TextArea>
    </div>
  )
}

export const WithValue: Story = {
  args: {
    defaultValue: '사유 입력할 땐 활성화 '
  },

  render: (args) => (
    <div>
      <TextArea
        maxLength={500}
        {...args}>
        <TextArea.form
          placeholder='취소 사유를 입력해주세요'
          className='h-[12.5rem] w-[31.5rem] p-4'
        />
        <TextArea.indicator />
      </TextArea>
    </div>
  )
}

export const WithError: Story = {
  args: {
    defaultValue: '사유 입력할 땐 활성화'.repeat(45)
  },

  render: (args) => (
    <div>
      <TextArea
        maxLength={500}
        {...args}>
        <TextArea.form
          placeholder='취소 사유를 입력해주세요'
          className='h-[12.5rem] w-[31.5rem] p-4'
        />
        <TextArea.indicator />
      </TextArea>
    </div>
  )
}
