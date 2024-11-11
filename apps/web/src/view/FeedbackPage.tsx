'use client'

import { FEEDBACK_STEP, FeedbackStepType } from '@/entities/feedback/config/feedback-step'
import { extractKeysFromObject } from '@/shared/lib'
import { MentoFeedback, PairFeedback, PartFeedback } from '@/widgets/feedback/ui'
import { useState } from 'react'

export const FeedbackPage = () => {
  const feedbackStep = extractKeysFromObject(FEEDBACK_STEP)
  const [currentStep, setCurrentStep] = useState(0)

  const onNavigateToNextStep = () => {
    if (currentStep === feedbackStep.length - 1) return
    setCurrentStep((prev) => prev + 1)
  }

  const onNavigateToPreviousStep = () => {
    if (currentStep === 0) return
    setCurrentStep((prev) => prev - 1)
  }

  return (
    <div>
      {feedbackStep[currentStep] === 'PART' && <PartFeedback />}
      {feedbackStep[currentStep] === 'MENTO' && <MentoFeedback />}
      {feedbackStep[currentStep] === 'PAIR' && <PairFeedback />}
    </div>
  )
}
