'use client'

import { Flex, SolidButton } from '@repo/ui/server'
import { Icon } from '@repo/ui/client'
import Logo from '../logo'
import DropdownMenu from '../dropdown-menu'
import Link from 'next/link'
import { signOut } from '@/features/auth/api/sign-out'
import { useEffect, useState } from 'react'
import LoginModal from '@/features/auth/ui/login-modal'
import SignupModal from '@/features/auth/ui/signup-modal'
import { useShallow } from 'zustand/shallow'
import { useSearchParams } from 'next/navigation'
import { authStore } from '@/features/auth/model/auth-store'

export function Header() {
  const searchParams = useSearchParams()
  const isLoginSuccess = searchParams.get('login_success') === 'true'
  const syncSession = authStore.getState().syncSession

  useEffect(
    function AuthSyncSession() {
      if (isLoginSuccess) {
        syncSession()
        window.history.replaceState({}, '', window.location.pathname)
      }
    },
    [isLoginSuccess]
  )

  const { isLoggedIn, clearSession } = authStore(
    useShallow((state) => ({
      isLoggedIn: state.isLoggedIn,
      clearSession: state.clearSession
    }))
  )

  const [isLoginModalOpen, setLoginModalOpen] = useState(false)
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false)

  const onAlarmClick = () => {
    console.log('alarm')
  }

  const onLoginClick = () => {
    setLoginModalOpen(true)
  }

  const onLogoutClick = () => {
    signOut()
    clearSession()
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
            gap={32}>
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
            <DropdownMenu>
              <DropdownMenu.Trigger aria-label='my-page'>
                <Icon
                  size={36}
                  name='UserOutlined'
                />
              </DropdownMenu.Trigger>
              <DropdownMenu.MenuContent
                triggerHeight='3rem'
                className='right-0'>
                <DropdownMenu.MenuItem value='mypage'>
                  <Link href='/mypage'>마이페이지</Link>
                </DropdownMenu.MenuItem>
                <DropdownMenu.MenuItem value='logout'>
                  <button onClick={onLogoutClick}>로그아웃</button>
                </DropdownMenu.MenuItem>
              </DropdownMenu.MenuContent>
            </DropdownMenu>
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
            <LoginModal
              isLoginModalOpen={isLoginModalOpen}
              setLoginModalOpen={setLoginModalOpen}
              setSignupModalOpen={setSignUpModalOpen}
            />
            <SignupModal
              isSignupModalOpen={isSignUpModalOpen}
              setSignupModalOpen={setSignUpModalOpen}
            />
          </div>
        )}
      </header>
    </Flex>
  )
}
