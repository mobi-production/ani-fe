'use client'

import { PathProductItemProgress } from '@repo/ui/path-product-item'
import Typography from '@repo/ui/typography'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Typography
        variant='title-2'
        fontWeight='medium'
        color='disable'>
        Hello
      </Typography>
      <PathProductItemProgress>
        <PathProductItemProgress.Image
          src='/avif/placeholder.avif'
          alt='Placeholder Image'
        />
        <PathProductItemProgress.RightSection
          level={1}
          category='카테고리'
          name='패스 이름'
          value={80}
        />
      </PathProductItemProgress>
    </div>
  )
}
