import { Icon } from '@repo/ui/client'
import { Flex, SolidButton, Typography } from '@repo/ui/server'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  description?: string
  buttonText?: string
  reset?: () => void
}

export function ErrorPage({ title, description, buttonText = '홈으로 돌아가기', reset }: Props) {
  return (
    <section className='relative mx-auto flex h-[calc(100vh-13.875rem)] w-full max-w-[82rem] items-center justify-center rounded-xl px-[17.5rem] py-[4.5rem]'>
      <Flex
        align='center'
        justify='center'
        className='relative z-[1] gap-[3.5rem]'
        direction='column'>
        <Flex
          align='center'
          justify='center'
          asChild>
          <div className='flex h-[3.75rem] w-[3.75rem] rounded-full bg-fill-alternative'>
            <Icon
              name='FrownOutlined'
              size={32}
              color='fill-normal'
            />
          </div>
        </Flex>
        <Flex
          direction='column'
          gap={12}>
          <Typography
            variant='display-2'
            fontWeight='bold'>
            {title}
          </Typography>
          {description && (
            <Typography
              variant='body-1-normal'
              fontWeight='medium'
              color='alternative'
              className='whitespace-pre-wrap text-center'>
              {description}
            </Typography>
          )}
        </Flex>
        <Link
          href='/'
          className='w-full'>
          <SolidButton
            fullWidth
            onClick={reset}>
            {buttonText}
          </SolidButton>
        </Link>
      </Flex>
      <div className='shadow-normal absolute inset-0 overflow-hidden rounded-xl bg-background-normal'>
        <i className='absolute left-[10px] top-[30px]'>
          <Image
            src='/webp/question.webp'
            alt='error-background'
            width={496}
            height={680}
          />
        </i>
        <i className='absolute right-[-30px] top-[-250px]'>
          <Image
            src='/webp/question.webp'
            alt='error-background'
            width={496}
            height={680}
          />
        </i>
        <i className='absolute bottom-[-350px] right-[150px]'>
          <Image
            src='/webp/question.webp'
            alt='error-background'
            width={496}
            height={680}
          />
        </i>
      </div>
    </section>
  )
}
