import { Typography } from '@repo/ui/server'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Typography
        variant='title-3'
        fontWeight='medium'
        color='disable'>
        Hello
      </Typography>
    </div>
  )
}
