import { Assignment } from '@/__mock__/data/mypage'
import DropdownMenu from '@/shared/ui/dropdown-menu'
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
      direction='column'
      className='w-full rounded-[0.75rem] bg-white px-[2.375rem] py-[2.25rem]'>
      <DropdownMenu>
        <DropdownMenu.Trigger>
          <Flex
            direction='row'
            align='center'
            className='gap-[0.25rem]'>
            <Typography>{assignmentFilterValue}</Typography>
            <Icon
              size='16'
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
      <div>전체 과제들</div>
      <Flex
        direction='row'
        align='center'
        className='gap-[0.25rem] text-status-error'>
        <Icon
          name='InfoCircleOutlined'
          size='20'
        />
        <Typography color='inherit'>
          미제출 과제가 3개 이상일 경우, 과정이 미수료 처리될 수 있어요
        </Typography>
      </Flex>
    </Flex>
  )
}

export default AssignmentList
