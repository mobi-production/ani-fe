import type { Meta, StoryObj } from '@storybook/react'
import { ErrorPage } from '.'
import { SpacingBlock } from '@repo/ui/server'

const meta = {
  title: 'Page/ErrorPage',
  component: ErrorPage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
에러상황시 보여주는 페이지입니다.
        `
      }
    }
  }
} satisfies Meta<typeof ErrorPage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    title: '페이지를 찾을 수 없습니다.',
    description: '죄송합니다. 요청하신 페이지를 찾을 수 없습니다.'
  },
  parameters: {
    layout: 'fullscreen'
  },
  render: (args) => (
    <div className='h-dvh w-full bg-background-alternative'>
      <SpacingBlock height={48} />
      <ErrorPage {...args} />
    </div>
  )
}
