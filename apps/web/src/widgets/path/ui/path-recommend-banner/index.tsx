import { Flex } from '@repo/ui/server'

import { Typography } from '@repo/ui/server'

type Props = {
  recommendedItems: {
    id: number
    emoji: string
    description: string
  }[]
}

function PathRecommendBanner({ recommendedItems }: Props) {
  return (
    <section
      id={'path_recommend'}
      className='flex flex-col gap-[1.5rem]'>
      <Typography
        variant='title-3'
        fontWeight={'bold'}>
        이런 분들에게 추천해요
      </Typography>
      <Flex
        direction={'column'}
        className='gap-[0.75rem]'>
        {recommendedItems.map((feature, index) => (
          <Flex
            key={index}
            align={'center'}
            className='gap-[0.75rem]'>
            <Flex
              align={'center'}
              justify={'center'}
              asChild>
              <div className='h-12 w-12 rounded-3xl bg-background-alternative px-[0.562rem] py-[0.812rem] text-[1.5rem]'>
                <Typography variant='heading-1'>{feature.emoji}</Typography>
              </div>
            </Flex>
            <Typography
              variant='body-1-normal'
              fontWeight={'medium'}>
              {feature.description}
            </Typography>
          </Flex>
        ))}
      </Flex>
    </section>
  )
}

export default PathRecommendBanner
