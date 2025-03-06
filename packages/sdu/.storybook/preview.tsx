import type { Preview } from '@storybook/react'
import '../../../config/libs/globals.css'
import React from 'react'
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => {
      return <Story />
    }
  ]
}

export default preview
