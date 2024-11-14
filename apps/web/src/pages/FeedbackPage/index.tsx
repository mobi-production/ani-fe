'use client'

import { FEEDBACK_STEP } from '@/widgets/feedback/config/feedback-step'
import { extractKeysFromObject } from '@/shared/lib'
import { MentoFeedback, PairFeedback, PartFeedback } from '@/widgets/feedback/ui'
import { useFunnel } from '@/shared/lib/hooks/use-funnel'
import FeedbackStep from '@/widgets/feedback/ui/feedback-step'

export default function FeedbackPage() {
  const feedbackStep = [...extractKeysFromObject(FEEDBACK_STEP)]
  const { FunnelStep, onNavigateStep } = useFunnel({
    steps: feedbackStep,
    defaultStepName: FEEDBACK_STEP.PART.VALUE
  })

  return (
    <div>
      <FeedbackStep />
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
