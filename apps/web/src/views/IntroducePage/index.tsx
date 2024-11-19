'use client'

import { pathIntroduce as mockData } from '@/__mock__/data/path'
import { ServerDrivenComponent, ServerDrivenComponentType } from '@/shared/core/sdu'

export function Inner({ data }: { data: ServerDrivenComponentType }) {
  return <ServerDrivenComponent data={data} />
}

export default function IntroducePage({ pathId }: { pathId: string }) {
  const data = mockData.data.content

  return <Inner data={data} />
}
