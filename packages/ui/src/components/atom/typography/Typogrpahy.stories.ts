import type { Meta, StoryObj } from '@storybook/react'
import Typography from './Typography'

const meta = {
  title: 'Atom/Typography',
  component: Typography,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'Display1',
        'Display2',
        'Title1',
        'Title2',
        'Title3',
        'Heading1',
        'Heading2',
        'Body1/Normal',
        'Body1/Reading',
        'Body2/Normal',
        'Body2/Reading',
        'Label/Normal',
        'Label/Reading',
        'Caption1',
        'Caption2'
      ]
    },
    fontWeight: {
      control: 'select',
      options: ['Regular', 'Medium', 'Bold', 'Semibold']
    },
    color: {
      control: 'select',
      options: ['Normal', 'Strong', 'Neutral', 'Alternative', 'Assistive', 'Disabled']
    },
    children: {
      control: 'text'
    }
  }
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Display: Story = {
  args: {
    variant: 'Display1',
    color: 'Normal',
    children: 'Typography'
  }
}

export const Title: Story = {
  args: {
    variant: 'Title1',
    color: 'Normal',
    children: 'Typography'
  }
}

export const Heading: Story = {
  args: {
    variant: 'Heading1',
    color: 'Normal',
    children: 'Typography'
  }
}

export const Body: Story = {
  args: {
    variant: 'Body1/Normal',
    color: 'Normal',
    children: 'Typography'
  }
}

export const Caption: Story = {
  args: {
    variant: 'Caption1',
    color: 'Normal',
    children: 'Typography'
  }
}
