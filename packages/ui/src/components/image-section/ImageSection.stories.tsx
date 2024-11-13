import type { Meta, StoryObj } from '@storybook/react'
import ImageSection from '@ui/components/image-section'
import { ImageFits, ImageSizes } from '@ui/components/image-section/variants'

const meta: Meta<typeof ImageSection> = {
  title: 'MDS/ImageSection',
  component: ImageSection,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(ImageSizes),
      description: '이미지의 크기'
    },
    fit: {
      control: 'select',
      options: Object.values(ImageFits),
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
    src: '/avif/placeholder.avif',
    alt: 'Placeholder Image'
  }
}

export const MediumImageSection: Story = {
  args: {
    size: 'm',
    src: '/avif/placeholder.avif',
    alt: 'Placeholder Image'
  }
}

export const SmallImageSection: Story = {
  args: {
    size: 's',
    src: '/avif/placeholder.avif',
    alt: 'Placeholder Image'
  }
}

export const XSmallImageSection: Story = {
  args: {
    size: 'xs',
    src: '/avif/placeholder.avif',
    alt: 'Placeholder Image'
  }
}

export const XXSmallImageSection: Story = {
  args: {
    size: 'xxs',
    src: '/avif/placeholder.avif',
    alt: 'Placeholder Image'
  }
}
