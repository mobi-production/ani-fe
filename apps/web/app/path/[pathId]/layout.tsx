import { PropsWithChildren } from 'react'

import { Flex } from '@repo/ui/server'
export default function Layout({ children }: PropsWithChildren) {
  return (
    <Flex
      direction={'column'}
      asChild>
      <div className='mx-auto w-full max-w-[82rem]'>{children}</div>
    </Flex>
  )
}
