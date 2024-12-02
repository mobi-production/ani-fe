import { Flex, Typography } from '@repo/ui/server'

type Props = {
  url: string
  title: string
  description: string
  preview: string
}

function SDUBookmark({ url, title, description, preview }: Props) {
  return (
    <a href={url}>
      <Flex
        gap={16}
        align='center'
        asChild>
        <div className='overflow-hidden rounded-[4px] border border-line-normal duration-200 ease-in-out hover:bg-background-alternative focus:bg-background-alternative'>
          <img
            src={preview}
            alt={title}
            className='aspect-square object-contain'
            width={84}
            height={84}
          />
          <Flex
            direction='column'
            gap={4}
            asChild>
            <div className='pr-6'>
              <Typography
                variant='body-2-normal'
                fontWeight='medium'>
                {title}
              </Typography>
              <Typography
                variant='label-normal'
                fontWeight='medium'
                className='text-overflow-ellipsis line-clamp-1'>
                {description}
              </Typography>
            </div>
          </Flex>
        </div>
      </Flex>
    </a>
  )
}

export default SDUBookmark
