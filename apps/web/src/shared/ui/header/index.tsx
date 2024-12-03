'use client'

import { Flex, SolidButton } from '@repo/ui/server'
import { Icon } from '@repo/ui/client'
import Logo from '../logo'
import { useAuthModalStore } from '@/features/auth/model'

type HeaderProps = {
  isLoggedIn: boolean
}

function Header({ isLoggedIn }: HeaderProps) {
  const setIsLoginModalOpen = useAuthModalStore((state) => state.setIsLoginModalOpen)
  const onAlarmClick = () => {
    console.log('alarm')
  }

  const onMyPageClick = () => {
    console.log('my-page')
  }

  const onLoginClick = () => {
    setIsLoginModalOpen(true)
  }

  return (
    <Flex
      direction={'row'}
      align={'center'}
      justify={'between'}
      asChild
      className='bg-background-normal px-[5rem] py-[1.625rem]'>
      <header className='w-full'>
        <Logo />
        {isLoggedIn ? (
          <Flex
            align={'center'}
            gap={8}>
            <button
              onClick={onAlarmClick}
              className='h-9 w-9'
              aria-label='alarm'
              type='button'>
              <Icon
                size={36}
                name='BellOutlined'
              />
            </button>
            <button
              onClick={onMyPageClick}
              className='h-9 w-9'
              aria-label='my-page'
              type='button'>
              <Icon
                size={36}
                name='UserOutlined'
              />
            </button>
          </Flex>
        ) : (
          <div className='relative h-9 w-24'>
            <SolidButton
              onClick={onLoginClick}
              className='absolute right-0 top-1/2 -translate-y-1/2'
              size={'medium'}
              rightIcon={<Icon name='RightOutlined' />}>
              로그인
            </SolidButton>
          </div>
        )}
      </header>
    </Flex>
  )
}

export default Header
