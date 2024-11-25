'use client'

import Logo from '@/shared/ui/logo'
import { Icon, Input } from '@repo/ui/client'
import { Divider, Flex, Modal, SolidButton, Typography } from '@repo/ui/server'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useAuthModalStore } from '../../store'

function LoginModal() {
  const [isVisible, setIsVisible] = useState(false)
  const isLoginModalOpen = useAuthModalStore((state) => state.isLoginModalOpen)
  const setIsLoginModalOpen = useAuthModalStore((state) => state.setIsLoginModalOpen)

  const onCloseLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  return (
    <Modal
      className='p-0'
      withCloseButton={false}
      withBackDrop
      isOpen={isLoginModalOpen}
      onClose={onCloseLoginModal}>
      <Flex
        asChild
        direction='column'
        align='start'
        className='min-w-[37.5rem] px-[3.125rem] py-[3rem]'>
        <form className='gap-[3rem]'>
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
              <Input placeholder='이메일을 입력해주세요' />
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
                placeholder='비밀번호를 입력해주세요'
                rightIcon={
                  <div className='text-label-alternative'>
                    <Icon
                      size={20}
                      onClick={() => setIsVisible((prev) => !prev)}
                      name={isVisible ? 'EyeOutlined' : 'EyeInvisibleOutlined'}
                    />
                  </div>
                }
              />
            </Flex>
          </Flex>
          <Flex
            className='w-full'
            direction='column'
            gap={12}>
            <SolidButton
              type='submit'
              size='large'
              disabled={false}
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
              <Link href='/'>
                <Typography
                  className='text-primary-normal'
                  variant='body-1-normal'
                  fontWeight='medium'>
                  회원가입하기
                </Typography>
              </Link>
            </Flex>
          </Flex>
          <Flex
            className='w-full'
            direction='row'
            align='center'
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
            fullWidth>
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
              <Flex
                direction='row'
                align='center'
                gap={8}>
                디스코드로 로그인
              </Flex>
            </Flex>
          </SolidButton>
        </form>
      </Flex>
    </Modal>
  )
}

export default LoginModal
