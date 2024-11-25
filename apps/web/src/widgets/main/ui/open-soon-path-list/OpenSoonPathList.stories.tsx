import { Meta, StoryObj } from '@storybook/react'
import OpenSoonPathList from '.'
import { mainData } from '@/__mock__/data/main'

const meta = {
  title: 'Widget/Main/OpenSoonPathList',
  component: OpenSoonPathList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '오픈 예정인 패스 목록을 나타내는 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof OpenSoonPathList>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    pathData: mainData.pathData
  }
}
