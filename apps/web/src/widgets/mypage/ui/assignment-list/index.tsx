import { Assignment } from '@/__mock__/data/mypage'
import DropdownMenu from '@/shared/ui/dropdown-menu'
import { PathProductItemAssignment } from '@/shared/ui/path-product-item'
import { Icon } from '@repo/ui/client'
import { Flex, Typography } from '@repo/ui/server'
import { useState } from 'react'

type AssignmentListProps = {
  data: Assignment[]
}

function AssignmentList({ data }: AssignmentListProps) {
  const [assignmentFilterValue, setAssignmentFilterValue] = useState('전체')
  const handleSelectAssignmentFilter = (value: string) => {
    setAssignmentFilterValue(value)
  }

  if (!data) return null
  return (
    <Flex
      gap={26}
      direction='column'
      className='w-full rounded-[0.75rem] bg-white px-[2.375rem] py-[2.25rem]'>
      <DropdownMenu>
        <DropdownMenu.Trigger>
          <Flex
            gap={4}
            direction='row'
            align='center'>
            <Typography>{assignmentFilterValue}</Typography>
            <Icon
              size={16}
              name='DownOutlined'
            />
          </Flex>
        </DropdownMenu.Trigger>
        <DropdownMenu.MenuContent triggerHeight='1.563rem'>
          <DropdownMenu.MenuItem
            value='전체'
            onValueSelect={handleSelectAssignmentFilter}>
            전체
          </DropdownMenu.MenuItem>
          <DropdownMenu.MenuItem
            value='제출 가능'
            onValueSelect={handleSelectAssignmentFilter}>
            제출 가능
          </DropdownMenu.MenuItem>
          <DropdownMenu.MenuItem
            value='제출 완료'
            onValueSelect={handleSelectAssignmentFilter}>
            제출 완료
          </DropdownMenu.MenuItem>
          <DropdownMenu.MenuItem
            value='제출 마감'
            onValueSelect={handleSelectAssignmentFilter}>
            제출 마감
          </DropdownMenu.MenuItem>
        </DropdownMenu.MenuContent>
      </DropdownMenu>
      <Flex
        direction='column'
        gap={8}>
        <Flex
          direction='row'
          wrap='wrap'
          align='center'
          gap={12}>
          {data.map((assignment) => {
            return (
              <div
                key={assignment.id}
                className='w-[25.25rem] rounded-[0.5rem] border p-[1.25rem]'>
                <PathProductItemAssignment>
                  <PathProductItemAssignment.LeftSection
                    src={assignment.image}
                    alt={`${assignment.assignMentName} 이미지`}
                    pathName={assignment.pathName}
                    assignmentName={assignment.assignMentName}
                    endDate={assignment.dueDate}
                  />
                  <PathProductItemAssignment.StatusBadge badgeType={assignment.status} />
                </PathProductItemAssignment>
              </div>
            )
          })}
        </Flex>
        <Flex
          gap={4}
          direction='row'
          align='center'
          className='text-status-error'>
          <Icon
            name='InfoCircleOutlined'
            size={16}
          />
          <Typography color='inherit'>
            미제출 과제가 3개 이상일 경우, 과정이 미수료 처리될 수 있어요
          </Typography>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AssignmentList
