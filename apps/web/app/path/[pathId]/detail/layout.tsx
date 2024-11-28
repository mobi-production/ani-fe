import { getPathStatus, GetPathStatusResponseType } from '@/views/path/api/get-path-status'
import SidebarPathDetailNavLink from '@/widgets/path/ui/sidebar/PathDetailNavLink'
import { Icon } from '@repo/ui/client'
import { Flex, Typography } from '@repo/ui/server'
import { notFound } from 'next/navigation'
import cn from '@repo/util/cn'
import { PropsWithChildren } from 'react'

type Props = {
  params: { pathId: string }
}

export function DetailPageLayoutInner({
  children,
  data
}: PropsWithChildren<{ data: GetPathStatusResponseType['data'] }>) {
  return (
    <Flex
      asChild
      gap={28}
      direction='row'>
      <main className='mb-[4.5rem] w-full max-w-[82rem] overflow-x-auto'>
        <SidebarPathDetailNavLink data={data} />
        <section
          className={cn('flex-1', data.path.status === 'COMPLETED' && 'flex flex-col gap-7')}>
          {data.path.status === 'COMPLETED' && (
            <Flex
              direction='row'
              gap={20}
              asChild>
              <div
                className='rounded-xl border-[1.5px] border-primary-normal px-[38px] py-8'
                style={{
                  background: 'linear-gradient(0deg, #F7FFFC 0%, #F7FFFC 100%), #FFF'
                }}>
                <Icon
                  name='FireOutlined'
                  size={32}
                />
                <Flex
                  direction='column'
                  gap={4}>
                  <Typography
                    variant='title-3'
                    fontWeight='bold'>
                    이수를 완료했어요
                  </Typography>
                  <Typography variant='body-1-normal'>
                    {data.path.title} 패스의 모든 과정을 이수했어요.
                  </Typography>
                </Flex>
              </div>
            </Flex>
          )}
          {children}
        </section>
      </main>
    </Flex>
  )
}

export default async function Layout({ params: { pathId }, children }: PropsWithChildren<Props>) {
  const sidebarStatus = await getPathStatus({ pathId })

  if (!sidebarStatus) {
    return notFound()
  }

  return <DetailPageLayoutInner data={sidebarStatus.data}>{children}</DetailPageLayoutInner>
}
