import type { Meta, StoryObj } from '@storybook/react'

import Typography from '.'
import { TypographyColors, TypographyFontWeights, TypographyVariants } from './variants'

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
      options: Object.values(TypographyVariants)
    },
    fontWeight: {
      control: 'select',
      options: Object.values(TypographyFontWeights)
    },
    color: {
      control: 'select',
      options: Object.values(TypographyColors)
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
    variant: TypographyVariants.DISPLAY1,
    color: TypographyColors.NORMAL,
    children: 'Typography'
  }
}

export const Title: Story = {
  args: {
    variant: TypographyVariants.TITLE1,
    color: TypographyColors.NORMAL,
    children: 'Typography'
  }
}

export const Heading: Story = {
  args: {
    variant: TypographyVariants.HEADING1,
    color: TypographyColors.NORMAL,
    children: 'Typography'
  }
}

export const Body: Story = {
  args: {
    variant: TypographyVariants.BODY1_NORMAL,
    color: TypographyColors.NORMAL,
    children: 'Typography'
  }
}

export const Caption: Story = {
  args: {
    variant: TypographyVariants.CAPTION1,
    color: TypographyColors.NORMAL,
    children: 'Typography'
  }
}
