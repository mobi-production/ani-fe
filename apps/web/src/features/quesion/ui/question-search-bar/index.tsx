import { Icon, Input } from '@repo/ui/client'
import { Flex, SpacingBlock } from '@repo/ui/server'

function QuestionSearchBar() {
  return (
    <Input
      placeholder='검색해보세요'
      className='text-b2-normal'
      leftIcon={
        <Flex className='text-label-assistive'>
          <Icon
            name='SearchOutlined'
            size={16}
          />
          <SpacingBlock size={4} />
        </Flex>
      }
    />
  )
}

export default QuestionSearchBar
