import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from '@repo/ui/server'
import PathInformationBanner from '.'

const meta = {
  title: 'Widget/Path/InformationBanner',
  component: PathInformationBanner,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
#### 패스의 주요 정보를 한눈에 볼 수 있도록 표시하는 배너 컴포넌트입니다.

#### 주요 기능
- 패스 운영 기간 표시
- 모집 기간 정보 표시
- 합격자 발표일 안내
- 수강 정원 및 난이도 레벨 표시

#### 사용 예시

\`\`\`tsx
<PathInformationBanner
  startDate="2024-11-18"
  endDate="2024-11-25"
  recruitStartDate="2024-12-23"
  recruitEndDate="2024-12-30"
  announcementDate="2025-01-01"
  maxStudent={20}
  level="초급"
/>
\`\`\`
            `
      },
      argTypes: {
        startDate: { control: 'date', summary: '패스 시작일' },
        endDate: { control: 'date', summary: '패스 종료일' },
        recruitStartDate: { control: 'date', summary: '모집 시작일' },
        recruitEndDate: { control: 'date', summary: '모집 종료일' },
        announcementDate: { control: 'date', summary: '공고 일자' },
        maxStudent: { control: 'number', summary: '최대 수강인원' },
        level: { control: 'text', summary: '패스 레벨' }
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof PathInformationBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    startDate: '2024-11-18T08:25:56.000Z',
    endDate: '2024-11-25T08:25:56.000Z',
    recruitStartDate: '2024-12-23T08:25:56.000Z',
    recruitEndDate: '2024-12-30T08:25:56.000Z',
    announcementDate: '2025-01-01T08:25:56.000Z',
    maxStudent: 20,
    level: '초급'
  },
  decorators: [
    (Story) => (
      <Flex
        align={'center'}
        justify={'center'}
        className='h-[20rem] w-full'>
        <div className='w-[30rem]'>
          <Story />
        </div>
      </Flex>
    )
  ]
}
