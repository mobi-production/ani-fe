import { Flex } from '@repo/ui/server'
import { PropsWithChildren } from 'react'

function FullScreenLayout({ children }: PropsWithChildren) {
  return (
    <Flex
      asChild
      gap={12}
      direction={'column'}
      align={'start'}
      justify={'center'}>
      <main className='w-max-[82rem] mb-[4.5rem] w-full rounded-[0.75rem] bg-background-normal px-[2.375rem] py-[4.5rem]'>
        {children}
      </main>
    </Flex>
  )
}

export default FullScreenLayout
