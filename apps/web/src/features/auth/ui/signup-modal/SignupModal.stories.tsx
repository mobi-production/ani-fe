import type { Meta, StoryObj } from '@storybook/react'
import { Flex, Modal, SolidButton, Typography } from '@repo/ui/server'
import SignupModal from '.'
import Logo from '@/shared/ui/logo'
import { Icon, Input } from '@repo/ui/client'
import { useState } from 'react'

const meta = {
  title: 'Feature/Auth/SignupModal',
  component: SignupModal,
  parameters: {
    layout: 'center',
    docs: {
      description: {
        component: '마이페이지 내 상태 정보를 변경하는 모달을 오픈하는 버튼'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof SignupModal>

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
                  <Input placeholder='닉네임을 입력해주세요' />
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
              <SolidButton
                size='large'
                fullWidth
                type='submit'>
                회원가입
              </SolidButton>
            </form>
          </Flex>
        </Modal>
      </div>
    )
  }
}
