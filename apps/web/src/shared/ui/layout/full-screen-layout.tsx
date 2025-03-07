import { Flex } from '@repo/ui/server'

/**
 * 풀 스크린 레이아웃
 * @description 풀 스크린 레이아웃은 최대 너비가 1344px인 컨테이너 내부에 자식 컴포넌트를 배치합니다.
 */
function FullScreenLayout({ children }: PropsNeedChildren) {
  return (
    <Flex
      asChild
      gap={48}
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
