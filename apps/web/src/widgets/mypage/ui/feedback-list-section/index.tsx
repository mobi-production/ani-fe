import { Feedback } from '@/__mock__/data/mypage'
import Tabs from '@/shared/ui/tabs'
import { Flex, Typography } from '@repo/ui/server'
import FeedbackList from '../feedback-list'

type FeedbackListSectionProps = {
  data: Feedback[]
}

function FeedbackListSection({ data }: FeedbackListSectionProps) {
  if (!data) return null
  return (
    <Flex
      direction='column'
      gap={16}
      className='mb-[3rem]'>
      {data.map((feedback) => (
        <Flex
          direction='column'
          className='w-full gap-[1.625rem] rounded-[0.75rem] bg-white px-[2.375rem] py-[2.25rem]'>
          <Flex gap={16}>
            <Typography
              variant='title-3'
              fontWeight='bold'>
              {feedback.pathName}
            </Typography>
          </Flex>
          <Tabs
            defaultValue='PATH'
            lazyMount>
            <Tabs.List>
              <Tabs.Trigger value='PATH'>패스</Tabs.Trigger>
              <Tabs.Trigger value='PART'>파트</Tabs.Trigger>
              <Tabs.Trigger value='ASSIGNMENT'>과제</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value='PATH'>
              {feedback.feedbackListByPath.length === 0 ? (
                <Typography
                  className='text-neutral-60'
                  variant='body-2-normal'
                  fontWeight='medium'>
                  패스가 아직 진행 중이어서 피드백이 작성되지 않았어요
                </Typography>
              ) : (
                <FeedbackList data={feedback.feedbackListByPath} />
              )}
            </Tabs.Content>
            <Tabs.Content value='PART'>
              {feedback.feedbackListByPart.length === 0 ? (
                <Typography
                  className='text-neutral-60'
                  variant='body-2-normal'
                  fontWeight='medium'>
                  파트가 아직 진행 중이어서 피드백이 작성되지 않았어요
                </Typography>
              ) : (
                <FeedbackList data={feedback.feedbackListByPart} />
              )}
            </Tabs.Content>
            <Tabs.Content value='ASSIGNMENT'>
              {feedback.feedbackListByPage.length === 0 ? (
                <Typography
                  className='text-neutral-60'
                  variant='body-2-normal'
                  fontWeight='medium'>
                  과제가 아직 진행 중이어서 피드백이 작성되지 않았어요
                </Typography>
              ) : (
                <FeedbackList data={feedback.feedbackListByPage} />
              )}
            </Tabs.Content>
          </Tabs>
        </Flex>
      ))}
    </Flex>
  )
}

export default FeedbackListSection
