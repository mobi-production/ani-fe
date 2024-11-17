import type { UserData } from '@/__mock__/data/main'
import PaginationControls from '@/shared/ui/pagination-controls'
import { PathProductItemProgress } from '@/shared/ui/path-product-item'
import { Flex, Typography } from '@repo/ui/server'

function LeaningSummaryList({ userData }: { userData: UserData }) {
  if (!userData) return null
  return (
    <Flex
      direction='column'
      className='w-full rounded-[0.75rem] bg-white p-[2.375rem]'>
      <Flex
        className='w-full'
        direction='row'
        align='center'
        justify='between'>
        <Typography
          className='mb-[1.625rem]'
          variant='title-3'
          fontWeight='bold'>
          학습진도율
        </Typography>
        <PaginationControls>
          <PaginationControls.LeftButton
            isActive={false}
            onClick={() => {}}
          />
          <PaginationControls.RightButton
            isActive={false}
            onClick={() => {}}
          />
        </PaginationControls>
      </Flex>
      <Flex
        direction='row'
        align='center'
        justify='between'>
        {userData.learningSummary.map((summary) => {
          return (
            <div
              key={summary.id}
              className='w-[25.25rem] rounded-[0.5rem] border p-[1.25rem]'>
              <PathProductItemProgress fullWidth>
                <PathProductItemProgress.Image
                  src={summary.image}
                  alt={`${summary.pathName} 이미지`}
                />
                <PathProductItemProgress.RightSection
                  level={summary.level}
                  category={summary.category}
                  name={summary.pathName}
                  badgeType={summary.status}
                  value={summary.completion}
                />
              </PathProductItemProgress>
            </div>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default LeaningSummaryList
