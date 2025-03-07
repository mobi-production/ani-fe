import { UserData } from '@/__mock__/types/main'
import PaginationControls from '@/shared/ui/pagination-controls'
import { PathProductItemAssignment } from '@/shared/ui/path-product-item'
import { Flex, Typography } from '@repo/ui/server'

function AssignmentList({ userData }: { userData: UserData }) {
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
          과제
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
        gap={12}>
        {userData.assignment.map((assignment) => {
          return (
            <div
              key={assignment.id}
              className='w-[25.25rem] rounded-[0.5rem] border p-[1.25rem]'>
              <PathProductItemAssignment>
                <PathProductItemAssignment.LeftSection
                  src={assignment.image}
                  alt={`${assignment.assignmentName} 이미지`}
                  pathName={assignment.pathName}
                  assignmentName={assignment.assignmentName}
                  endDate={assignment.endDate}
                />
                <PathProductItemAssignment.StatusBadge badgeType={assignment.status} />
              </PathProductItemAssignment>
            </div>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default AssignmentList
