'use client'

import { mockQuestionList } from '@/__mock__/data/question'
import OneQuestionPreview from '@/widgets/question/ui/one-question-preview'
import { Pagination } from '@repo/ui/client'
import { Flex, SpacingBlock } from '@repo/ui/server'

function QuestionList() {
  return (
    <div className='w-[20.938rem]'>
      <Flex
        direction={'column'}
        gap={20}>
        {mockQuestionList.slice(0, 3).map((question) => (
          <OneQuestionPreview key={question.id}>
            <OneQuestionPreview.Tag
              label={question.tag}
              // @TODO: 태그 색상 어떻게 결정할지 논의 필요
              theme='MINT'
            />
            <OneQuestionPreview.Title>{question.title}</OneQuestionPreview.Title>
            <OneQuestionPreview.Contents>{question.content}</OneQuestionPreview.Contents>
            <OneQuestionPreview.Date date={question.createdDate} />
          </OneQuestionPreview>
        ))}
      </Flex>
      <SpacingBlock size={36} />
      <Flex justify={'center'}>
        <Pagination
          totalItems={mockQuestionList.length}
          itemsPerPage={3}
          pagesPerSection={5}
          onChange={() => {}}>
          <Pagination.Prev />
          <Pagination.PageButtonList />
          <Pagination.Next />
        </Pagination>
      </Flex>
    </div>
  )
}

export default QuestionList
