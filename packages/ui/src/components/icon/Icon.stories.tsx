import { Flex } from '@repo/ui/server'
import { SIZE_VARIANTS } from '@repo/ui/variants/size'
import { Meta, StoryObj } from '@storybook/react'

import Icon from './index'
import { IconsMap } from './variants'
const meta = {
  title: 'MDS/Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(IconsMap)
    },
    size: {
      control: 'select',
      options: Object.values(SIZE_VARIANTS).filter((value) => value < 48)
    }
  }
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    name: 'RightOutlined'
  }
}

export const IconPreview = () => {
  return (
    <Flex gap={4}>
      {Object.keys(IconsMap).map((icon) => (
        <Icon
          size={24}
          key={icon}
          name={icon as keyof typeof IconsMap}
        />
      ))}
    </Flex>
  )
}
