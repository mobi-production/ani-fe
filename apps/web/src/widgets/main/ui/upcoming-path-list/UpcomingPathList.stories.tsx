import { Meta } from '@storybook/react/*'
import UpcomingPathList from '.'

const meta = {
  title: 'Widget/Main/UpcomingPathList',
  component: UpcomingPathList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '현재 진행 예정인 패스 학습진도율 목록을 나타내는 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof UpcomingPathList>

export default meta
// type Story = StoryObj<typeof meta>
