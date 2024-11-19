import type { Meta, StoryObj } from '@storybook/react'
import PathFeedbackSubmitButton from '.'
import { Flex } from '@repo/ui/server'

const meta = {
  title: 'Feature/PathFeedbackSubmitButton',
  component: PathFeedbackSubmitButton,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '패스 피드백 제출 버튼'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof PathFeedbackSubmitButton>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    pathId: '1',
    isLoggedIn: true
  },
  decorators: [
    (Story) => (
      <Flex
        align={'center'}
        justify={'center'}
        className='h-[20rem] w-full'>
        <div className='w-[9rem]'>
          <Story />
        </div>
      </Flex>
    )
  ]
}
