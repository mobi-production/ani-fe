import { Assignment } from '@/__mock__/data/mypage'
import { Icon } from '@repo/ui/client'
import { Flex, Typography } from '@repo/ui/server'

type AssignmentListProps = {
  data: Assignment[]
}

function AssignmentList({ data }: AssignmentListProps) {
  if (!data) return null
  return (
    <Flex
      direction='column'
      className='w-full rounded-[0.75rem] bg-white px-[2.375rem] py-[2.25rem]'>
      <div>필터 셀렉터</div>
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
