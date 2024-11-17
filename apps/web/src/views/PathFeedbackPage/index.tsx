'use client'

import { PathFeedback } from '@/widgets/feedback/ui'

type Props = {
  pathId: string
}

export default function PathFeedbackPage({ pathId }: Props) {
  return (
    <div className='m-auto my-12 mb-10 w-[40rem]'>
      <PathFeedback />
    </div>
  )
}
