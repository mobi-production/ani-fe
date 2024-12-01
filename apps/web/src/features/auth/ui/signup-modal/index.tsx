'use client'

import { Flex, Modal, SolidButton, Typography } from '@repo/ui/server'
import { useAuthModalStore } from '../../store'
import Logo from '@/shared/ui/logo'
import { Icon, Input } from '@repo/ui/client'
import { useState } from 'react'
import { SignupModalFormData, signupModalSchema } from '../../model/signupModalSchema'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signup } from '@/entities/auth/lib/apis'

function SignupModal() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const isSignupModalOpen = useAuthModalStore((state) => state.isSignupModalOpen)
  const setIsSignupModalOpen = useAuthModalStore((state) => state.setIsSignupModalOpen)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control
  } = useForm<SignupModalFormData>({
    resolver: zodResolver(signupModalSchema),
    defaultValues: {
      email: '',
      nickname: '',
      password: ''
    }
  })

  const [email, nickname, password] = useWatch({
    control,
    name: ['email', 'nickname', 'password'],
    defaultValue: {
      email: '',
      nickname: '',
      password: ''
    }
  })

  const isFormInvalid = !email || !nickname || !password || isSubmitting

  const onCloseSignupModal = () => {
    setIsSignupModalOpen(false)
  }

  const onSubmit = async (formData: SignupModalFormData) => {
    const response = await signup(formData)
    if (response?.status === 201) {
      console.log(response.message)
      onCloseSignupModal()
    } else {
      console.error('회원가입 실패:', response?.message)
    }
  }

  return (
    <Modal
      className='p-0'
      withCloseButton={false}
      withBackDrop
      isOpen={isSignupModalOpen}
      onClose={onCloseSignupModal}>
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
        <SolidButton
          size='large'
          fullWidth
          disabled={isFormInvalid}
          type='submit'>
          회원가입
        </SolidButton>
      </form>
    </Modal>
  )
}

export default SignupModal
