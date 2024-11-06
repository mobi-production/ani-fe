'use client'

import { renderComponents } from '@repo/ui/renderComponents'
import example from './example.json' assert { type: 'json' }
import { type ServerDrivenComponentType } from '@repo/ui/types'

export default function Home() {
  return <div>{renderComponents(example as ServerDrivenComponentType)}</div>
}
