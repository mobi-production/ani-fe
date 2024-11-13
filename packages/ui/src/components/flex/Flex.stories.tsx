import type { Meta, StoryObj } from '@storybook/react'

import SpacingBlock from '../spacing-block'
import Flex from '.'
import { FlexAlign, FlexDirection, FlexGap, FlexJustify, FlexWrap } from './variants'

const meta = {
  title: 'MDS/Flex',
  component: Flex,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    align: {
      control: 'select',
      options: Object.values(FlexAlign)
    },
    justify: {
      control: 'select',
      options: Object.values(FlexJustify)
    },
    wrap: {
      description: 'Flex 컨테이너 내부 요소의 줄 방법',
      control: 'select',
      options: Object.values(FlexWrap)
    },
    gap: {
      description: 'Flex 컨테이너 내부 요소의 간격',
      control: 'select',
      options: Object.values(FlexGap)
    },
    direction: {
      description: 'Flex 컨테이너 내부 요소의 방향',
      control: 'select',
      options: Object.values(FlexDirection)
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    align: FlexAlign.START,
    justify: FlexJustify.START,
    wrap: FlexWrap.NOWRAP,
    gap: FlexGap['1'],
    direction: FlexDirection.ROW
  },

  render: (args) => (
    <div className='w-[40rem] border border-gray-200'>
      <Flex {...args}>
        <SpacingBlock
          size={20}
          showBlock
        />
        <SpacingBlock
          size={24}
          showBlock
        />
        <SpacingBlock
          size={16}
          showBlock
        />
      </Flex>
    </div>
  )
}

export const Align: Story = {
  args: {
    align: FlexAlign.START,
    justify: FlexJustify.START,
    wrap: FlexWrap.WRAP,
    gap: FlexGap['1'],
    direction: FlexDirection.ROW
  },

  render: (args) => (
    <div className='w-[15rem] border border-gray-200'>
      <Flex
        asChild
        {...args}>
        <ul>
          <li>
            <SpacingBlock
              width={20}
              height={8}
              showBlock
              className='bg-red-50'
            />
          </li>
          <li>
            <SpacingBlock
              width={20}
              height={4}
              showBlock
              className='bg-green-50'
            />
          </li>
          <li>
            <SpacingBlock
              width={20}
              height={12}
              showBlock
              className='bg-blue-50'
            />
          </li>
        </ul>
      </Flex>
    </div>
  )
}
