import type { Meta, StoryObj } from '@storybook/react'
import { Divider, Flex, Modal, SolidButton, Typography } from '@repo/ui/server'
import LoginModal from '.'
import Logo from '@/shared/ui/logo'
import { Icon, Input } from '@repo/ui/client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const meta = {
  title: 'Feature/Auth/LoginModal',
  component: LoginModal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '로그인을 위한 모달 컴포넌트입니다'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof LoginModal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
      <div className='flex h-screen items-center justify-center'>
        <Modal
          className='p-0'
          withCloseButton={false}
          withBackDrop
          isOpen={true}
          onClose={() => {}}>
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
                          onClick={() => setIsPasswordVisible((prev) => !prev)}
                          name={isPasswordVisible ? 'EyeOutlined' : 'EyeInvisibleOutlined'}
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
                  <button type='button'>
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
      </div>
    )
  }
}
