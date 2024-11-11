'use-client'

import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import Funnel from './Funnel'
import type { FunnelProps, FunnelStepProps } from './funnel-type'

type Props<T extends string[]> = {
  steps: T
  defaultStepName: T[number]
}

export function useFunnel<T extends string[]>({ steps, defaultStepName }: Props<T>) {
  const router = useRouter()
  const { query } = router

  const validStepQuery = steps.find((step) => step === query.step)
  const [currentStep, setCurrentStep] = useState<T[number]>(validStepQuery || defaultStepName)

  useEffect(() => {
    if (query.step && steps.includes(query.step)) {
      setCurrentStep(query.step)
    }
  }, [query.step])

  const onNavigateStep = (step: T[number]) => {
    router.push({ query: { step } }, undefined, { shallow: true })
  }

  const FunnelStep = useMemo(() => {
    const funnelWithStep = (props: Omit<FunnelProps<T>, 'step' | 'steps'>) => {
      return (
        <Funnel<T>
          steps={steps}
          step={currentStep}
          {...props}
        />
      )
    }

    funnelWithStep.Step = Funnel.Step

    return funnelWithStep
  }, [currentStep])

  return {
    FunnelStep,
    onNavigateStep
  }
}
