import { getPathSidebarStatus } from '@/entities/path/lib/apis'
import PathDetailNavLink from '@/widgets/path/ui/path-detail-nav-link'
import { Flex } from '@repo/ui/server'
import { notFound } from 'next/navigation'
import { PropsWithChildren } from 'react'

type Props = {
  params: { pathId: string }
}

export default async function Layout({ params: { pathId }, children }: PropsWithChildren<Props>) {
  const sidebarStatus = await getPathSidebarStatus({ pathId })

  if (!sidebarStatus) {
    return notFound()
  }

  return (
    <Flex
      asChild
      gap={28}
      direction='row'>
      <main className='mb-[4.5rem] min-h-[calc(100vh-8.75rem)] w-full max-w-[82rem] overflow-x-auto'>
        <PathDetailNavLink data={sidebarStatus.data} />
        {children}
      </main>
    </Flex>
  )
}
