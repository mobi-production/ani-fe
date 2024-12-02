'use client'

import { FEEDBACK_STEP } from '@/widgets/feedback/config/feedback-step'
import FeedbackStep from '@/widgets/feedback/ui/feedback-step'
import { MentoFeedback, PairFeedback, PartFeedback } from '@/entities/feedback/ui/feedback-list'
import { useFunnel } from '@/shared/hooks/use-funnel'
import { extractKeysFromObject } from '@/shared/utils'
type InnerProps = {}

export function Inner() {
  const feedbackStep = [...extractKeysFromObject(FEEDBACK_STEP)]
  const { FunnelStep } = useFunnel({
    steps: feedbackStep,
    defaultStepName: FEEDBACK_STEP.PART.VALUE
  })

  return (
    <div className='m-auto my-12 w-[40rem]'>
      <div className='mb-10'>
        <FeedbackStep>
          <FeedbackStep.Item
            stepLabel={FEEDBACK_STEP.PART.LABEL}
            stepValue={FEEDBACK_STEP.PART.VALUE}
          />
          <FeedbackStep.Divider />
          <FeedbackStep.Item
            stepLabel={FEEDBACK_STEP.MENTO.LABEL}
            stepValue={FEEDBACK_STEP.MENTO.VALUE}
          />
          <FeedbackStep.Divider />
          <FeedbackStep.Item
            stepLabel={FEEDBACK_STEP.PAIR.LABEL}
            stepValue={FEEDBACK_STEP.PAIR.VALUE}
          />
        </FeedbackStep>
      </div>
      <div>
        <FunnelStep>
          <FunnelStep.Step stepName={FEEDBACK_STEP.PART.VALUE}>
            <PartFeedback />
          </FunnelStep.Step>
          <FunnelStep.Step stepName={FEEDBACK_STEP.MENTO.VALUE}>
            <MentoFeedback />
          </FunnelStep.Step>
          <FunnelStep.Step stepName={FEEDBACK_STEP.PAIR.VALUE}>
            <PairFeedback />
          </FunnelStep.Step>
        </FunnelStep>
      </div>
    </div>
  )
}

type PartFeedbackPageProps = { partId: string }

export default function PartFeedbackPage({ partId }: PartFeedbackPageProps) {
  return <Inner />
}
