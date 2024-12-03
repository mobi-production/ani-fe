import { Flex, Typography } from '@repo/ui/server'
import SubmitQuestionSection from '@/features/quesion/ui/submit-question-section'

export default function CreateQuestionPage() {
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
