'use client'

import type { MyPageProfileData } from '@/__mock__/types/mypage'
import { putMyProfile } from '@/entities/mypage/lib/apis'

import { Flex, SolidButton, Typography } from '@repo/ui/server'
import { Modal } from '@repo/ui/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Icon, Input } from '@repo/ui/client'
import Link from 'next/link'
import { MyPageProfileEditFormData, myPageProfileEditSchema } from '../../model/profileEditSchema'
import { useState } from 'react'
import ImageUpload from '@/shared/ui/image-upload'

type ProfileEditModalProps = {
  isOpen: boolean
  onClose: () => void
  onOpenWithdrawalModal: () => void
  data: MyPageProfileData
}

function ProfileEditModal({ isOpen, onClose, onOpenWithdrawalModal, data }: ProfileEditModalProps) {
  const [image, setImage] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<MyPageProfileEditFormData>({
    resolver: zodResolver(myPageProfileEditSchema),
    defaultValues: {
      nickname: data.nickname,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirmation
    }
  })

  const onSubmit = async (formData: MyPageProfileEditFormData) => {
    const response = await putMyProfile({
      userId: '1',
      nickname: formData.nickname,
      password: formData.password,
      passwordConfirmation: formData.passwordConfirm,
      email: formData.email,
      image: image || ''
    })
    console.log(response)
    onClose()
  }

  return (
    <Modal
      className='p-0'
      withCloseButton={false}
      withBackDrop
      isOpen={isOpen}
      onClose={onClose}>
      <Flex
        asChild
        direction='column'
        align='star'
        gap={36}
        className='w-[37.5rem] px-[3rem] py-[3.125rem]'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            className='w-full'
            align='center'
            justify='center'>
            <ImageUpload onImageSelect={setImage}>
              <ImageUpload.Preview asTrigger />
            </ImageUpload>
          </Flex>
          <Flex
            direction='column'
            gap={28}>
            <Flex
              direction='column'
              gap={12}>
              <Typography
                variant='body-1-normal'
                fontWeight='semibold'>
                닉네임
              </Typography>
              <Input
                {...register('nickname')}
                placeholder='닉네임을 입력하세요'
                isError={!!errors.nickname}
                errorMessage={errors.nickname?.message}
              />
            </Flex>
            <Flex
              direction='column'
              gap={12}>
              <Typography
                variant='body-1-normal'
                fontWeight='semibold'>
                이메일
              </Typography>
              <Flex
                direction='column'
                gap={8}>
                <Input
                  placeholder='이메일을 입력하세요'
                  readOnly={data.emailVerified}
                  {...register('email')}
                  isSuccess={data.emailVerified}
                  successMessage='인증이 완료됐어요'
                />
                {!data.emailVerified && (
                  <Flex
                    direction='row'
                    align='center'
                    justify='between'>
                    <Flex
                      direction='row'
                      align='center'
                      className='text-status-error'
                      gap={4}>
                      <Icon
                        size={14}
                        name='ExclamationCircleOutlined'
                      />
                      <Typography
                        variant='label-reading'
                        fontWeight='regular'
                        color='inherit'>
                        아직 인증이 완료되지 않았어요
                      </Typography>
                    </Flex>
                    <Link href='#'>
                      <Typography
                        className='underline'
                        variant='body-1-normal'
                        fontWeight='medium'>
                        인증번호 재전송
                      </Typography>
                    </Link>
                  </Flex>
                )}
              </Flex>
            </Flex>
            <Flex
              direction='column'
              gap={12}>
              <Typography
                variant='body-1-normal'
                fontWeight='semibold'>
                비밀번호
              </Typography>
              <Input
                {...register('password')}
                placeholder='비밀번호를 입력하세요'
                isError={!!errors.password}
                errorMessage={errors.password?.message}
                type='password'
              />
            </Flex>
            <Flex
              direction='column'
              gap={12}>
              <Typography
                variant='body-1-normal'
                fontWeight='semibold'>
                비밀번호 확인
              </Typography>
              <Input
                {...register('passwordConfirm')}
                placeholder='비밀번호를 입력하세요'
                type='password'
                isError={!!errors.passwordConfirm}
                errorMessage={errors.passwordConfirm?.message}
              />
            </Flex>
          </Flex>
          <Flex
            direction='column'
            gap={20}>
            <Flex
              direction='row'
              gap={8}>
              <SolidButton
                type='button'
                variant='secondary'
                onClick={onClose}
                fullWidth>
                취소
              </SolidButton>
              <SolidButton
                type='submit'
                fullWidth
                disabled={isSubmitting}>
                {isSubmitting ? '저장중...' : '저장'}
              </SolidButton>
            </Flex>
            <Flex
              asChild
              direction='row'
              align='center'
              gap={4}>
              <button
                type='button'
                onClick={onOpenWithdrawalModal}>
                <Typography
                  variant='label-normal'
                  fontWeight='medium'>
                  회원 탈퇴하기
                </Typography>
                <Icon
                  size={14}
                  name='RightOutlined'
                />
              </button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Modal>
  )
}

export default ProfileEditModal
