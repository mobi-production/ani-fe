import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from '@repo/ui/server'
import NavigationLinks from '.'

const meta = {
  title: 'Shared/NavigationLinks',
  component: NavigationLinks,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
패스 상세 페이지내에서 패스 정보와 패스 특징등 다양한 내비게이션 링크로 바로 이동할 수 있는 링크 컴포넌트입니다.

#### 주요 기능
- id 값을 이용하여 특정 위치로 이동합니다.
- moveHeightOffset에 따라 이동할 위치가 변경됩니다.

#### 사용 예시

\`\`\`tsx

const Component = () => {
  return (
    <main className='relative'>
      <Flex
        direction={'column'}
        className='sticky top-0 w-full bg-inherit'>
        <NavigationLinks
          links={[
            { id: 'path_info', title: '패스 정보' },
            { id: 'path_feature', title: '패스 특징' },
            { id: 'curriculum', title: '커리큘럼' }
          ]}
        />
      <Divider />
      </Flex>
      {/* 패스 정보 */}
      <section id='path_information'>패스 정보</section>
      {/* 패스 특징 */}
      <section id='path_recommend'>패스 특징</section>
    </main>
  )
}
\`\`\`


            `
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof NavigationLinks>

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
