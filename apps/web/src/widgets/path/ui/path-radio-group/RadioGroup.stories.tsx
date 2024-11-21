import type { Meta, StoryObj } from '@storybook/react'

import RadioGroup from '.'

const meta = {
  title: 'Widget/Path/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '패스 문제에서 선택을 하여 문제를 풀 수 있는 RadioGroup 컴포넌트'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    defaultValue: '1'
  },

  render: (args) => (
    <div className='w-[40rem]'>
      <RadioGroup {...args}>
        <RadioGroup.Item
          label='문서가 어떤 HTML 버전을 사용하는지 명시하기 위해'
          value='1'
        />
        <RadioGroup.Item
          label='문서에서 사용할 문자 인코딩을 정의하기 위해'
          value='2'
        />
        <RadioGroup.Item
          label='문서가 어떤 HTML 버전을 사용하는지 명시하기 위해'
          value='3'
        />
        <RadioGroup.Item
          label='문서가 어떤 HTML 버전을 사용하는지 명시하기 위해'
          value='4'
        />
        <RadioGroup.Item
          label='문서가 어떤 HTML 버전을 사용하는지 명시하기 위해'
          value='5'
        />
      </RadioGroup>
    </div>
  )
}
