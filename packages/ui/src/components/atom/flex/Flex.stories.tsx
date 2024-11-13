import type { Meta, StoryObj } from '@storybook/react'
import Flex from '@ui/components/atom/flex'
import {
  FlexAlign,
  FlexDirection,
  FlexGap,
  FlexJustify,
  FlexWrap
} from '@ui/components/atom/flex/variants'
import SpacingBlock from '@ui/components/atom/spacing-block'

const meta = {
  title: 'Atom/Flex',
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
          size='20r'
          showBlock
        />
        <SpacingBlock
          size='24r'
          showBlock
        />
        <SpacingBlock
          size='16r'
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
              width='20r'
              height='8r'
              showBlock
              className='bg-red-50'
            />
          </li>
          <li>
            <SpacingBlock
              width='20r'
              height='4r'
              showBlock
              className='bg-green-50'
            />
          </li>
          <li>
            <SpacingBlock
              width='20r'
              height='12r'
              showBlock
              className='bg-blue-50'
            />
          </li>
        </ul>
      </Flex>
    </div>
  )
}
