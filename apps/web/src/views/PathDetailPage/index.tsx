'use client'

import { GetPathPageResponseType } from '@/entities/path/lib/types/apis'
import PathQuiz from '@/entities/path/ui/path-quiz'
import { ServerDrivenComponent } from '@repo/sdu/index'
import { Flex, Typography } from '@repo/ui/server'

type Props = {
  data: GetPathPageResponseType['data']
}

export default function PathDetailPage({ data }: Props) {
  return (
    <Flex
      direction='column'
      gap={24}
      align='start'
      className='flex-1'
      asChild>
      <section className='rounded-xl bg-background-normal px-[2.375rem] py-[4.5rem]'>
        <Flex
          direction='column'
          gap={4}>
          <Typography variant='body-1-normal'>{data.partName}</Typography>
          <Typography
            variant='title-3'
            fontWeight={'bold'}>
            {data.pageName}
          </Typography>
        </Flex>
        {data.type === 'LEARNING_CONTENTS' && <ServerDrivenComponent content={data.content} />}

        {data.type === 'QUIZ' && <PathQuiz data={data} />}
      </section>
    </Flex>
  )
}
