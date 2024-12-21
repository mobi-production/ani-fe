'use client'

import { Flex, SolidButton, Typography } from '@repo/ui/server'
import Logo from '@/shared/ui/logo'
import { Icon, Input, Modal } from '@repo/ui/client'
import { Dispatch, SetStateAction, useState } from 'react'
import { useFormState } from 'react-dom'
import { localSignup } from '../../api/local-signup'

type Props = {
  isSignupModalOpen: boolean
  setSignupModalOpen: Dispatch<SetStateAction<boolean>>
}

function SignupModal({ isSignupModalOpen, setSignupModalOpen }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const onCloseSignupModal = () => {
    setSignupModalOpen(false)
  }

  const [state, signupAction] = useFormState(localSignup, undefined)

  const isEmailError = !!state?.errors.email
  const isNicknameError = !!state?.errors.nickname
  const isPasswordError = !!state?.errors.password

  const isFormInvalid = isEmailError || isNicknameError || isPasswordError

  return (
    <Modal
      className='p-0'
      withCloseButton={false}
      withBackDrop
      isOpen={isSignupModalOpen}
      onClose={onCloseSignupModal}>
      <form
        action={signupAction}
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
            isError={isEmailError}
            errorMessage={state?.errors.email?.[0]}
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
            name='nickname'
            placeholder='닉네임을 입력해주세요'
            isError={isNicknameError}
            errorMessage={state?.errors.nickname?.[0]}
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
            isError={isPasswordError}
            errorMessage={state?.errors.password?.[0]}
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
