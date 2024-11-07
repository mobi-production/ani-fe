import type { Meta, StoryObj } from '@storybook/react'

import ImageSection from '.'

const meta: Meta<typeof ImageSection> = {
  title: 'Atom/ImageSection',
  component: ImageSection,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 's', 'm', 'l'],
      description: '이미지의 크기'
    },
    fit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none', 'scaleDown'],
      description: "'cover', 'contain', 'fill', 'none', 'scaleDown'"
    },
    src: {
      control: 'text',
      description: '표시할 이미지의 URL'
    },
    alt: {
      control: 'text',
      description: '이미지의 대체 텍스트, 스크린 리더 및 접근성을 위해 사용'
    }
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof meta>

export const LargeImageSection: Story = {
  args: {
    size: 'l',
    src: 'https://picsum.photos/400/300',
    alt: 'l-size 이미지'
  }
}

export const MediumImageSection: Story = {
  args: {
    size: 'm',
    src: 'https://picsum.photos/400/300',
    alt: 'm-size 이미지'
  }
}

export const SmallImageSection: Story = {
  args: {
    size: 's',
    src: 'https://picsum.photos/400/300',
    alt: 's-size 이미지'
  }
}

export const XSmallImageSection: Story = {
  args: {
    size: 'xs',
    src: 'https://picsum.photos/400/300',
    alt: 'xs-size 이미지'
  }
}

export const XXSmallImageSection: Story = {
  args: {
    size: 'xxs',
    src: 'https://picsum.photos/400/300',
    alt: 'xxs-size 이미지'
  }
}
