import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import Icon from '../icon'
import Input from '.'

const meta = {
  title: 'MDS/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      description: '입력 필드의 플레이스홀더 텍스트입니다.',
      control: 'text'
    },
    isSuccess: {
      description: '입력 상태가 성공인 경우 true로 설정합니다.',
      control: 'boolean'
    },
    successMessage: {
      description: '성공 상태일 때 표시할 메시지입니다.',
      control: 'text'
    },
    isError: {
      description: '입력 상태가 오류인 경우 true로 설정합니다.',
      control: 'boolean'
    },
    errorMessage: {
      description: '오류 상태일 때 표시할 메시지입니다.',
      control: 'text'
    },
    rightIcon: {
      description: '입력 필드의 오른쪽에 표시할 아이콘 요소를 설정합니다.',
      control: 'object'
    }
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: '아이디를 입력해주세요'
  },

  render: (args) => (
    <div>
      <Input {...args} />
    </div>
  )
}

export const WithIcon: Story = {
  args: {
    placeholder: '비밀번호를 입력해주세요'
  },

  render: (args) => {
    const [password, setPassword] = useState('1234444')
    const [isVisible, setIsVisible] = useState(false)

    return (
      <div>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={!isVisible ? 'password' : 'text'}
          rightIcon={
            <div className='text-label-alternative'>
              <Icon
                size={18}
                onClick={() => setIsVisible((prev) => !prev)}
                name={isVisible ? 'EyeOutlined' : 'EyeInvisibleOutlined'}
              />
            </div>
          }
          {...args}
        />
      </div>
    )
  }
}

export const WithSuccess: Story = {
  args: {
    placeholder: '아이디를 입력해주세요',
    isSuccess: true,
    successMessage: '성공'
  },

  render: (args) => (
    <div>
      <Input {...args} />
    </div>
  )
}

export const WithError: Story = {
  args: {
    placeholder: '비밀번호를 입력해주세요',
    isError: true,
    errorMessage: '에러'
  },

  render: (args) => (
    <div>
      <Input {...args} />
    </div>
  )
}
