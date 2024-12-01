import type { Meta, StoryObj } from '@storybook/react'

import OneReplyBubble from '.'

const meta = {
  title: 'Widget/Question/OneReplyBubble',
  component: OneReplyBubble,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '개별 답변 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof OneReplyBubble>

export default meta
type Story = StoryObj<typeof meta>

export const Mento: Story = {
  render: () => (
    <OneReplyBubble>
      <OneReplyBubble.Mento
        nickName='Zoey'
        contents='dSass is a CSS pre-processor with syntax advancements. Style sheets in the advanced syntax are processed by the program, and turned into regular CSS style sheets. However, they do not extend the CSS standard itself. CSS variables are supported and can be utilized but not as well as pre-processor variables. For the difference between SCSS and Sass, this text on the Sass documentation page should answer the question: The indented syntax was Sass’s original syntax, and so it uses the file extension .sass. Because of this extension, it’s sometimes just called “Sass”. The indented syntax supports all the same features as SCSS, but it uses indentation instead of curly braces and semicolons to describe the format of the document.'
        date='2024-09-09'
      />
    </OneReplyBubble>
  )
}

export const Menti: Story = {
  render: () => (
    <OneReplyBubble>
      <OneReplyBubble.Menti
        contents='dsfdsf'
        date={'2024-09-09'}
      />
    </OneReplyBubble>
  )
}
