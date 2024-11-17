import { Meta } from '@storybook/react/*'
import AssignmentList from '.'

const meta = {
  title: 'Widget/Main/AssignmentList',
  component: AssignmentList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '유저의 과제 목록을 나타내는 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof AssignmentList>

export default meta
// type Story = StoryObj<typeof meta>
