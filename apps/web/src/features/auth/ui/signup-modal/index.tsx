'use client'

import { Flex, Modal, SolidButton, Typography } from '@repo/ui/server'
import { useAuthModalStore } from '../../store'
import Logo from '@/shared/ui/logo'
import { Icon, Input } from '@repo/ui/client'
import { useState } from 'react'
import { SignupModalFormData, signupModalSchema } from '../../model/signupModalSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

function SignupModal() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const isSignupModalOpen = useAuthModalStore((state) => state.isSignupModalOpen)
  const setIsSignupModalOpen = useAuthModalStore((state) => state.setIsSignupModalOpen)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm<SignupModalFormData>({
    resolver: zodResolver(signupModalSchema),
    defaultValues: {
      email: '',
      nickname: '',
      password: ''
    }
  })

  const email = watch('email')
  const nickname = watch('nickname')
  const password = watch('password')

  const onCloseSignupModal = () => {
    setIsSignupModalOpen(false)
  }

  const onSubmit = async (formData: SignupModalFormData) => {
    console.log(formData)
  }

  return (
    <Modal
      className='p-0'
      withCloseButton={false}
      withBackDrop
      isOpen={isSignupModalOpen}
      onClose={onCloseSignupModal}>
      <Flex
        asChild
        direction='column'
        align='start'
        className='min-w-[37.5rem] px-[3.125rem] py-[3rem]'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='gap-[3rem]'>
          <Flex
            justify='center'
            className='w-full'>
            <Logo />
          </Flex>
          <Flex
            className='w-full'
            direction='column'
            gap={28}>
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
          </Flex>
          <Flex
            className='w-full'
            direction='column'
            gap={28}>
            <Flex
              direction='column'
              gap={12}>
              <Typography
                variant='heading-2'
                fontWeight='semibold'>
                닉네임
              </Typography>
              <Input
                {...register('nickname')}
                placeholder='닉네임을 입력해주세요'
                isError={!!errors.nickname}
                errorMessage={errors.nickname?.message}
              />
            </Flex>
          </Flex>
          <Flex
            className='w-full'
            direction='column'
            gap={28}>
            <Flex
              direction='column'
              gap={12}>
              <Typography
                variant='heading-2'
                fontWeight='semibold'>
                비밀번호
              </Typography>
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
          </Flex>
          <SolidButton
            size='large'
            fullWidth
            disabled={isSubmitting || !email || !nickname || !password}
            type='submit'>
            회원가입
          </SolidButton>
        </form>
      </Flex>
    </Modal>
  )
}

export default SignupModal
