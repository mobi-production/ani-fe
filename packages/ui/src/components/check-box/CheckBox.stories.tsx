import type { Meta, StoryObj } from '@storybook/react'

import Flex from '../flex'
import CheckBox from '.'
import { CheckBoxSize } from './variants'

const meta = {
  title: 'MDS/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      options: Object.values(CheckBoxSize),
      control: {
        type: 'select'
      }
    },
    select: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => {
    return (
      <Flex
        direction='column'
        gap='4'>
        <Flex gap='4'>
          <CheckBox
            select={true}
            size={CheckBoxSize.S}
          />
          <CheckBox
            select={true}
            disabled={true}
            size={CheckBoxSize.S}
          />
          <CheckBox
            select={false}
            size={CheckBoxSize.S}
          />
          <CheckBox
            select={false}
            disabled={true}
            size={CheckBoxSize.S}
          />
        </Flex>
        <Flex gap='4'>
          <CheckBox
            select={true}
            size={CheckBoxSize.M}
          />
          <CheckBox
            select={true}
            disabled={true}
            size={CheckBoxSize.M}
          />
          <CheckBox
            select={false}
            size={CheckBoxSize.M}
          />
          <CheckBox
            select={false}
            disabled={true}
            size={CheckBoxSize.M}
          />
        </Flex>
        <Flex gap='4'>
          <CheckBox
            select={true}
            size={CheckBoxSize.L}
          />
          <CheckBox
            select={true}
            disabled={true}
            size={CheckBoxSize.L}
          />
          <CheckBox
            select={false}
            size={CheckBoxSize.L}
          />
          <CheckBox
            select={false}
            disabled={true}
            size={CheckBoxSize.L}
          />
        </Flex>
      </Flex>
    )
  }
}

export const Preview: Story = {
  args: {
    select: false,
    size: CheckBoxSize.M,
    disabled: false
  },
  render: (args) => {
    return (
      <Flex gap='4'>
        <CheckBox
          select={args.select}
          size={args.size}
          disabled={args.disabled}
        />
      </Flex>
    )
  }
}
