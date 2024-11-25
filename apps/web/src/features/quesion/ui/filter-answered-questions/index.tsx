import { Flex, RadioBtn, Typography } from '@repo/ui/server'

function FilterAnsweredQuestions() {
  return (
    <Flex gap={8}>
      <RadioBtn />
      <Typography
        variant={'caption-1'}
        fontWeight={'regular'}
        color='normal'>
        답변된 질문만 보기
      </Typography>
    </Flex>
  )
}

export default FilterAnsweredQuestions
