import QuestionList from '@/entities/question/ui/question-list'
import FilterAnsweredQuestions from '@/features/quesion/ui/filter-answered-questions'
import QuestionSearchBar from '@/features/quesion/ui/question-search-bar'
import { SolidButton } from '@repo/ui/server'
import { Flex, Typography } from '@repo/ui/server'
import SubmitQuestionSection from '@/features/quesion/ui/submit-question-section'

export default function QuestionFormPage() {
  return (
    <Flex
      direction='column'
      gap={20}>
      <Flex direction={'column'}>
        <Typography
          variant={'heading-1'}
          fontWeight={'semibold'}
          color='normal'>
          질문 남기기
        </Typography>
        <Typography
          variant={'label-normal'}
          fontWeight={'medium'}
          color='alternative'>
          자유롭게 질문을 남겨보세요
        </Typography>
      </Flex>
      <SubmitQuestionSection />
    </Flex>
  )
}
