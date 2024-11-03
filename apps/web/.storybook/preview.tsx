import type { Preview } from '@storybook/react'
import '@/styles/globals.css'
import { pretendardFont } from '../app/_fonts'
import React from 'react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    decorators: [
      (Story) => {
        return <div className={pretendardFont.className}>{Story()}</div>
      }
    ]
  }
}

export default preview
