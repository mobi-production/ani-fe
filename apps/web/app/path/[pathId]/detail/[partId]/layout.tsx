import { PropsWithChildren } from 'react'

import { Flex } from '@repo/ui/server'
import FloatingAction from '@/shared/ui/floating-action'
export default function Layout({ children }: PropsWithChildren) {
  return (
    <Flex
      direction={'column'}
      asChild>
      <div className='relative mx-auto w-full max-w-[82rem]'>
        {children}
        <FloatingAction />
      </div>
    </Flex>
  )
}
