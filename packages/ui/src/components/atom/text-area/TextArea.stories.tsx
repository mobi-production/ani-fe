import type { Meta, StoryObj } from '@storybook/react'

import TextArea from '.'

const meta = {
  title: 'Atom/TextArea',
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
    defaultValue: '1'
  },

  render: (args) => (
    <div className='w-[40rem]'>
      <TextArea {...args}>
        <TextArea.form placeholder='취소 사유를 입력해주세요' />
        <TextArea.indicator maxLength={500} />
      </TextArea>
    </div>
  )
}
