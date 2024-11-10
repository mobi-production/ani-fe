'use client'

import { PassProductItemBasic } from '@repo/ui/pass-product-item'
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
      {/* TODO: ImageSection random image -> placeholder 이미지로 변경 */}
      {/* TODO: progressbar transformOrigin: "center left"로 스타일 수정*/}
      <PassProductItemBasic>
        <PassProductItemBasic.Image
          src='/avif/placeholder.avif'
          alt='테스트이미지'
        />
        <PassProductItemBasic.BadgeList
          level={1}
          category='카테고리'
          badgeType='IN_PROGRESS'
        />
        <PassProductItemBasic.TextContentList
          name='패스 이름'
          period='2024.09.06 ~ 2024.10.06'
        />
      </PassProductItemBasic>
    </div>
  )
}
