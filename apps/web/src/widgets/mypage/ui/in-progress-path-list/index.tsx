import type { InProgressPath } from '@/__mock__/types/mypage'
import { PathProductItemProgress } from '@/shared/ui/path-product-item'
import { Flex, Typography } from '@repo/ui/server'

type InProgressPathListProps = {
  data: InProgressPath[]
}

function InProgressPathList({ data }: InProgressPathListProps) {
  if (!data) return null
  return (
    <Flex
      direction='column'
      className='w-full rounded-[0.75rem] bg-white px-[2.375rem] py-[2.25rem]'>
      <Flex
        className='w-full'
        direction='row'
        align='center'
        justify='between'>
        <Typography
          className='mb-[1.625rem]'
          variant='title-3'
          fontWeight='bold'>
          진행 중인 패스
        </Typography>
      </Flex>
      <Flex
        gap={12}
        direction='row'
        align='center'
        wrap='wrap'>
        {data.map((path) => (
          <div
            key={path.id}
            className='w-[25.25rem] rounded-[0.5rem] border p-[1.25rem]'>
            <PathProductItemProgress fullWidth>
              <PathProductItemProgress.Image
                src={path.image}
                alt={`${path.pathName} 이미지`}
              />
              <PathProductItemProgress.RightSection
                level={path.level}
                category={path.category}
                name={path.pathName}
                badgeType={path.status}
                value={path.progress}
              />
            </PathProductItemProgress>
          </div>
        ))}
      </Flex>
    </Flex>
  )
}

export default InProgressPathList
