import type { Meta, StoryObj } from '@storybook/react'
import { wrapWithAppRouterContext } from '@/shared/lib/utils'
import PathDetailPage from '.'
import { pathPageMock as data, pathSidebarStatusMock as sidebarStatus } from '@/__mock__/data/path'
import { useState } from 'react'
import { DetailPageLayoutInner } from 'app/path/[pathId]/detail/layout'

const meta = {
  title: 'Page/Path/DetailPage',
  component: PathDetailPage,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/path/3/detail',
        query: {
          partId: '2',
          pageId: '4'
        }
      }
    },
    docs: {
      description: {
        story: '패스 상세 페이지입니다.'
      }
    }
  },
  tags: ['autodocs'],
  decorators: [wrapWithAppRouterContext]
} satisfies Meta<typeof PathDetailPage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    data
  },
  render: function Story(args) {
    const [status, setStatus] = useState<'PENDING_REVIEW' | 'COMPLETED' | 'IN_PROGRESS'>(
      'PENDING_REVIEW'
    )

    return (
      <div className='bg-background-alternative p-20'>
        <select
          className='mb-2'
          value={status}
          onChange={(e) => setStatus(e.target.value as typeof status)}>
          <option value='PENDING_REVIEW'>Pending Review</option>
          <option value='COMPLETED'>Completed</option>
          <option value='IN_PROGRESS'>In Progress</option>
        </select>
        <DetailPageLayoutInner data={sidebarStatus('3', status)}>
          {args.data && <PathDetailPage {...args} />}
        </DetailPageLayoutInner>
      </div>
    )
  }
}
