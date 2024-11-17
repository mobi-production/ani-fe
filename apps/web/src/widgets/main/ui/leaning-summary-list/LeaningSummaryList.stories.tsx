import { Meta } from '@storybook/react/*'
import LeaningSummaryList from '.'

const meta = {
  title: 'Widget/Main/LeaningSummaryList',
  component: LeaningSummaryList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '유저의 학습진도율 목록을 나타내는 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof LeaningSummaryList>

export default meta
// type Story = StoryObj<typeof meta>
