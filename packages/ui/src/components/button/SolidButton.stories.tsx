import type { Meta, StoryObj } from '@storybook/react'
import SolidButton from '@ui/components/button/SolidButton'
import { ButtonSize, ButtonVariant } from '@ui/components/button/variants'
import Icon from '@ui/components/icon'
import { useState } from 'react'

const meta = {
  title: 'MDS/ButtonSolid',
  component: SolidButton,
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
} satisfies Meta<typeof SolidButton>

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
  render: (args) => {
    const [disabled, setDisabled] = useState(false)
    return (
      <SolidButton
        onClick={() => setDisabled((prev) => !prev)}
        {...args}
        rightIcon={<Icon name='RightOutlined' />}
        disabled={disabled}
      />
    )
  }
}
