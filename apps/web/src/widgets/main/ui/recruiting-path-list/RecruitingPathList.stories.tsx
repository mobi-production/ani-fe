import { Meta } from '@storybook/react/*'
import RecruitingPathList from '.'

const meta = {
  title: 'Widget/Main/RecruitingPathList',
  component: RecruitingPathList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '현재 모집 중인 패스 목록을 나타내는 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof RecruitingPathList>

export default meta
// type Story = StoryObj<typeof meta>
