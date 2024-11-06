'use client'

import { renderComponents, type ServerDrivenComponentType } from '@repo/ui/renderComponents'
import example from './example.json' assert { type: 'json' }

export default function Home() {
  return <div>{renderComponents(example as ServerDrivenComponentType)}</div>
}
