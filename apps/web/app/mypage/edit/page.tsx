import { Icon } from '@repo/ui/client'
import { Flex, OutlinedButton, SolidButton, Typography } from '@repo/ui/server'
import Image from 'next/image'

function MyPageEditPage() {
  return (
    <Flex
      asChild
      direction='column'
      align='star'
      gap={36}
      className='w-[600px] bg-pink-100 px-[3rem] py-[3.125rem]'>
      <form>
        <Flex
          className='w-full'
          align='center'
          justify='center'>
          <div className='relative h-[120px] w-[120px] overflow-hidden rounded-full'>
            {/* TODO: 실제 이미지 연동 + 프로필 사진이 없을 경우의 이미지도 연동 */}
            <Image
              src='/avif/placeholder.avif'
              alt='프로필 이미지'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              priority
              sizes='120px'
            />
          </div>
        </Flex>
        <Flex
          direction='column'
          gap={28}>
          <Typography
            variant='body-1-normal'
            fontWeight='semibold'>
            닉네임
          </Typography>
          <Typography
            variant='body-1-normal'
            fontWeight='semibold'>
            이메일
          </Typography>
          <Typography
            variant='body-1-normal'
            fontWeight='semibold'>
            비밀번호
          </Typography>
          <Typography
            variant='body-1-normal'
            fontWeight='semibold'>
            비밀번호 확인
          </Typography>
        </Flex>
        <Flex
          direction='column'
          gap={8}>
          <Flex
            direction='row'
            gap={8}>
            <SolidButton
              variant='secondary'
              fullWidth>
              취소
            </SolidButton>
            <SolidButton fullWidth>저장</SolidButton>
          </Flex>
          <Flex
            asChild
            direction='row'
            align='center'
            gap={4}>
            <button>
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
  )
}

export default MyPageEditPage
