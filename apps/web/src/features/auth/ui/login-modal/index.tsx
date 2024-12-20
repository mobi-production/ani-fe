'use client'

import Logo from '@/shared/ui/logo'
import { Icon, Input, Modal } from '@repo/ui/client'
import { Divider, Flex, SolidButton, Typography } from '@repo/ui/server'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'

import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type LoginModalFormData, loginModalSchema } from '@/entities/auth/model'
import useAuth from '@/features/auth/model/use-auth'

type LoginModalProps = {
  isLoginModalOpen: boolean
  setLoginModalOpen: Dispatch<SetStateAction<boolean>>
  setSignupModalOpen: Dispatch<SetStateAction<boolean>>
}

function LoginModal({ isLoginModalOpen, setLoginModalOpen, setSignupModalOpen }: LoginModalProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const { localLoginMutation } = useAuth()

  const handleDiscordLogin = async () => {
    window.location.href = `${process.env.NEXT_PUBLIC_AUTH_URL}/api/v1/auth/social/discord?type=ani`
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control
  } = useForm<LoginModalFormData>({
    resolver: zodResolver(loginModalSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [email, password] = useWatch({
    control,
    name: ['email', 'password'],
    defaultValue: {
      email: '',
      password: ''
    }
  })

  const isFormInvalid = !email || !password || isSubmitting

  const onCloseLoginModal = () => {
    setLoginModalOpen(false)
  }

  const onOpenSignupModal = () => {
    setLoginModalOpen(false)
    setSignupModalOpen(true)
  }

  const onSubmit = async (formData: LoginModalFormData) => {
    await localLoginMutation
      .mutateAsync({
        email: formData.email,
        password: formData.password
      })
      .finally(() => {
        onCloseLoginModal()
      })
  }

  return (
    <Modal
      className='p-0'
      withCloseButton={false}
      withBackDrop
      isOpen={isLoginModalOpen}
      onClose={onCloseLoginModal}>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
            {...register('email')}
            placeholder='이메일을 입력해주세요'
            isError={!!errors.email}
            errorMessage={errors.email?.message}
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
            {...register('password')}
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
            isError={!!errors.password}
            errorMessage={errors.password?.message}
          />
        </Flex>
        <Flex
          className='w-full'
          direction='column'
          gap={12}>
          <SolidButton
            type='submit'
            size='large'
            disabled={isFormInvalid}
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
