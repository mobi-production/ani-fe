import { Flex, Typography } from '@repo/ui/server'
import SubmitQuestionSection from '@/features/quesion/ui/submit-question-section'
import { GetQuestionDetailResponseType } from '../../api/get-question-detail'

type Props = {
  data: GetQuestionDetailResponseType['data']
}

export default function EditQuestionPage({ data }: Props) {
  return (
    <Flex
      direction='column'
      gap={20}>
      <Flex direction={'column'}>
        <Typography
          variant={'heading-1'}
          fontWeight={'semibold'}
          color='normal'>
          질문 수정하기
        </Typography>
        <Typography
          variant={'label-normal'}
          fontWeight={'medium'}
          color='alternative'>
          자유롭게 질문을 남겨보세요
        </Typography>
      </Flex>
      <SubmitQuestionSection
        defaultPathName={data.pathName}
        defaultTitle={data.title}
        defaultContents={data.contents}
      />
    </Flex>
  )
}
