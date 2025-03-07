'use client'

import Logo from '@/shared/ui/logo'
import { Icon, Input, Modal } from '@repo/ui/client'
import { Divider, Flex, SolidButton, Typography } from '@repo/ui/server'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { localLogin, oauthLogin } from '@/features/auth/api'
import { useFormState } from 'react-dom'
import { authStore } from '../../model/auth-store'

type LoginModalProps = {
  isLoginModalOpen: boolean
  setLoginModalOpen: Dispatch<SetStateAction<boolean>>
  setSignupModalOpen: Dispatch<SetStateAction<boolean>>
}

function LoginModal({ isLoginModalOpen, setLoginModalOpen, setSignupModalOpen }: LoginModalProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const syncSession = authStore.getState().syncSession

  const handleDiscordLogin = async () => {
    oauthLogin('discord')
  }

  const [state, loginAction] = useFormState(localLogin, undefined)

  const isEmailError = state?.errors?.email
  const isPasswordError = state?.errors?.password

  const isFormInvalid = isEmailError || isPasswordError

  const onCloseLoginModal = () => {
    setLoginModalOpen(false)
  }

  const onOpenSignupModal = () => {
    setLoginModalOpen(false)
    setSignupModalOpen(true)
  }

  useEffect(() => {
    if (state?.success) {
      onCloseLoginModal()
      syncSession()
    }
  }, [state])

  return (
    <Modal
      className='p-0'
      withCloseButton={false}
      withBackDrop
      isOpen={isLoginModalOpen}
      onClose={onCloseLoginModal}>
      <form
        action={loginAction}
        className='flex min-w-[37.5rem] flex-col gap-[3rem] px-[3.125rem] py-[3rem]'>
        <Flex
          justify='center'
          className='w-full'>
          <Logo />
        </Flex>
        <Flex
          direction='column'
          gap={12}>
          <Typography
            variant='heading-2'
            fontWeight='semibold'>
            이메일
          </Typography>
          <Input
            name='email'
            placeholder='이메일을 입력해주세요'
            isError={!!isEmailError}
            errorMessage={isEmailError?.[0]}
          />
        </Flex>
        <Flex
          direction='column'
          gap={12}>
          <Flex
            className='w-full'
            direction='row'
            align='center'
            justify='between'>
            <Typography
              variant='heading-2'
              fontWeight='semibold'>
              비밀번호
            </Typography>
            <Link href='/'>
              <Typography
                className='underline'
                variant='body-1-normal'
                fontWeight='regular'>
                비밀번호 찾기
              </Typography>
            </Link>
          </Flex>
          <Input
            name='password'
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder='비밀번호를 입력해주세요'
            rightIcon={
              <div className='text-label-alternative'>
                <Icon
                  size={20}
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                  name={isPasswordVisible ? 'EyeOutlined' : 'EyeInvisibleOutlined'}
                />
              </div>
            }
            isError={!!isPasswordError}
            errorMessage={isPasswordError?.[0]}
          />
        </Flex>
        <Flex
          className='w-full'
          direction='column'
          gap={12}>
          <SolidButton
            type='submit'
            size='large'
            disabled={!!isFormInvalid}
            fullWidth>
            로그인
          </SolidButton>
          <Flex
            direction='row'
            align='center'
            justify='center'
            gap={8}>
            <Typography
              variant='body-1-normal'
              fontWeight='medium'>
              계정이 없으신가요?
            </Typography>
            <button
              onClick={onOpenSignupModal}
              type='button'>
              <Typography
                className='text-primary-normal'
                variant='body-1-normal'
                fontWeight='medium'>
                회원가입하기
              </Typography>
            </button>
          </Flex>
        </Flex>
        <Flex
          className='w-full'
          direction='row'
          justify='center'
          gap={20}>
          <Divider className='w-full bg-[rgba(35,35,35,0.15)]' />
          <Typography
            className='text-neutral-60'
            variant='body-1-normal'
            fontWeight='medium'>
            OR
          </Typography>
          <Divider className='w-full bg-[rgba(35,35,35,0.15)]' />
        </Flex>
        <SolidButton
          type='button'
          disabled={false}
          className='bg-[#5865F2]'
          size='large'
          fullWidth
          onClick={handleDiscordLogin}>
          <Flex
            direction='row'
            align='center'
            gap={8}>
            <Image
              src='/webp/discord-icon.webp'
              width={36}
              height={36}
              alt='discord'
            />
            디스코드로 로그인
          </Flex>
        </SolidButton>
      </form>
    </Modal>
  )
}

export default LoginModal
