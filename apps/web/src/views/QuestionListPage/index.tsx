import QuestionList from '@/entities/question/ui/question-list'
import FilterAnsweredQuestions from '@/features/quesion/ui/filter-answered-questions'
import QuestionSearchBar from '@/features/quesion/ui/question-search-bar'
import { SolidButton } from '@repo/ui/server'
import { Flex, Typography } from '@repo/ui/server'

export default function QuestionListPage() {
  const onNavigateToFormPage = () => {
    // 질문 남기기 섹션으로 이동
  }

  return (
    <Flex
      direction='column'
      gap={20}>
      <Flex direction={'column'}>
        <Typography
          variant={'heading-1'}
          fontWeight={'semibold'}
          color='normal'>
          1:1 질문게시판
        </Typography>
        <Typography
          variant={'label-normal'}
          fontWeight={'medium'}
          color='alternative'>
          자유롭게 질문을 남겨보세요
        </Typography>
      </Flex>
      <QuestionSearchBar />
      <Flex justify={'end'}>
        <FilterAnsweredQuestions />
      </Flex>
      <QuestionList />
      <SolidButton
        onClick={onNavigateToFormPage}
        variant='primary'
        fullWidth
        className='rounded-[0.25rem]'>
        질문 남기기
      </SolidButton>
    </Flex>
  )
}
