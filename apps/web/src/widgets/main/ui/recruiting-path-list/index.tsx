import { PathData } from '@/__mock__/types/main'
import { PathProductItemBasic } from '@/shared/ui/path-product-item'
import { Flex, Typography } from '@repo/ui/server'

type RecruitingPathListProps = {
  pathData: PathData
}

function RecruitingPathList({ pathData }: RecruitingPathListProps) {
  if (!pathData) return null
  return (
    <Flex
      direction='column'
      className='w-full rounded-[0.75rem] bg-white p-[2.375rem] pb-[0.75rem]'>
      <Typography
        className='mb-[1.625rem]'
        variant='title-3'
        fontWeight='bold'>
        지금 모집 중인 패스
      </Typography>
      <Flex
        direction='row'
        wrap='wrap'
        align='center'
        gap={12}>
        {pathData.inProgressPaths.map((path) => {
          return (
            <div
              key={path.id}
              className='mb-[1.5rem] w-[18.75rem] rounded-[0.5rem] border p-[1.25rem]'>
              <PathProductItemBasic>
                <PathProductItemBasic.Image
                  src={path.image}
                  alt={`${path.pathName} 이미지`}
                  isApplied={path.isApplied}
                />
                <PathProductItemBasic.BadgeList
                  level={path.level}
                  category={'프론트엔드'}
                  badgeType={path.status}
                />
                <PathProductItemBasic.TextContentList
                  name={path.pathName}
                  applyPeriod={path.applyPeriod}
                  progressPeriod={path.progressPeriod}
                />
              </PathProductItemBasic>
            </div>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default RecruitingPathList
