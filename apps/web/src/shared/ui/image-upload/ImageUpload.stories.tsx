import type { Meta, StoryObj } from '@storybook/react'
import ImageUpload from '.'
import { SolidButton } from '@repo/ui/server'
import { useState } from 'react'

const meta = {
  title: 'Shared/ImageUpload',
  component: ImageUpload,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ImageUpload>

export default meta
type Story = StoryObj<typeof meta>

export const withTrigger: Story = {
  render: (args) => (
    <div className='flex items-center justify-center p-[5rem]'>
      <ImageUpload
        {...args}
        className='flex flex-col items-center gap-4'>
        <ImageUpload.Preview />
        <ImageUpload.Trigger>
          <SolidButton>이미지 업로드</SolidButton>
        </ImageUpload.Trigger>
      </ImageUpload>
    </div>
  )
}

export const onlyPreview: Story = {
  render: (args) => {
    const [_, setImage] = useState<string | null>(null)

    return (
      <div className='flex items-center justify-center p-[5rem]'>
        <ImageUpload
          onImageSelect={setImage}
          {...args}>
          <ImageUpload.Preview asTrigger />
        </ImageUpload>
      </div>
    )
  }
}
