import { Flex, Typography } from '@repo/ui/server'

type Props = {
  icon: string
  text: string
}

function SDUCallout({ icon, text }: Props) {
  return (
    <Flex
      asChild
      gap={20}
      align='center'>
      <div className='w-full rounded bg-cool-neutral-99 p-5'>
        <Typography
          variant='heading-1'
          fontWeight='semibold'>
          {icon}
        </Typography>
        <Typography
          variant='body-1-normal'
          fontWeight='medium'
          className='whitespace-pre-wrap'>
          {text}
        </Typography>
      </div>
    </Flex>
  )
}

export default SDUCallout
