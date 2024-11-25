import { Icon } from '@repo/ui/client'

function QuestionSearchBar() {
  return (
    <div className='w-full rounded-[0.25rem] bg-background-alternative p-[0.75rem] text-label-assistive'>
      <Icon
        name='SearchOutlined'
        size={16}
      />
    </div>
  )
}

export default QuestionSearchBar
