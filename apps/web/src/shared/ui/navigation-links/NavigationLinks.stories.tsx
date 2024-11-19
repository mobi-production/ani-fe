import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from '@repo/ui/server'
import PathNavigationLinks from '.'

const meta = {
  title: 'Widget/Path/NavigationLinks',
  component: PathNavigationLinks,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
#### 패스 상세 페이지내에서 패스 정보와 패스 특징등 다양한 내비게이션 링크로 바로 이동할 수 있는 링크 컴포넌트입니다.

#### 주요 기능
- 패스 정보 링크
- 패스 특징 링크
- 커리큘럼 링크

#### 사용 예시

\`\`\`tsx
<PathNavigationLinks links={[
  { id: 'path_information', title: '패스 정보' },
  { id: 'path_recommend', title: '패스 특징' }
]} />

<div id="path_information">패스 정보</div>
<div id="path_recommend">패스 특징</div>
\`\`\`

상세 페이지의 경우 sticky 속성을 사용하여 페이지 상단에 고정되도록 구현되어 있습니다.

\`\`\`tsx
<Flex
  direction={'column'}
  className='sticky top-0 w-full bg-inherit'>
  <PathNavigationLinks
    links={links}
    moveHeightOffset={0}
  />
  <Divider />
</Flex>
\`\`\`
            `
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof PathNavigationLinks>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    links: [
      { id: 'path_information', title: '패스 정보' },
      { id: 'path_recommend', title: '패스 특징' }
    ]
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
