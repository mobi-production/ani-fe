import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import Icon from '../icon'
import TextButton from './TextButton'
import { ButtonSize, ButtonVariant } from './variants'

const meta = {
  title: 'MDS/ButtonText',
  component: TextButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(ButtonVariant)
    },
    size: {
      control: 'select',
      options: Object.values(ButtonSize)
    },
    disabled: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof TextButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.MEDIUM,
    children: 'Click Me'
  }
}

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.SECONDARY,
    size: ButtonSize.MEDIUM,
    children: 'Click Me'
  }
}

export const Disabled: Story = {
  args: {
    size: ButtonSize.MEDIUM,
    disabled: true,
    children: 'Click Me'
  }
}

export const WithIcon: Story = {
  args: {
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.MEDIUM,
    children: 'Click Me'
  },
  render: (args: Story['args']) => {
    const [disabled, setDisabled] = useState(false)
    return (
      <TextButton
        onClick={() => setDisabled((prev) => !prev)}
        {...args}
        rightIcon={<Icon name='RightOutlined' />}
        disabled={disabled}
      />
    )
  }
}