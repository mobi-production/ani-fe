'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Children, ReactElement, isValidElement, useEffect, useMemo, useState } from 'react'

export type FunnelStepProps<T extends string[]> = {
  stepName: T[number]
} & PropsNeedChildren

export type FunnelProps<T extends string[]> = {
  steps: T
  step: T[number]
  children: Array<ReactElement<FunnelStepProps<T>>> | ReactElement<FunnelStepProps<T>>
}

type Props<T extends string[]> = {
  steps: T
  defaultStepName: T[number]
}

function Funnel<T extends string[]>({ children, step, steps }: FunnelProps<T>) {
  const childrenArray = Children.toArray(children)
    .filter(isValidElement)
    .filter((element): element is ReactElement<FunnelStepProps<T>> => {
      const { stepName } = element.props as FunnelStepProps<T>
      return steps.includes(stepName ?? '')
    })

  const currentStep = childrenArray.find((child) => child.props.stepName === step)

  if (!currentStep) return <></>
  return <>{currentStep}</>
}

function Step<T extends string[]>({ children }: FunnelStepProps<T>) {
  return <>{children}</>
}

export function useFunnel<T extends string[]>({ steps, defaultStepName }: Props<T>) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const stepQuery = searchParams?.get('step')
  const validStepQuery = steps.includes(stepQuery || '') ? stepQuery : null
  const [currentStep, setCurrentStep] = useState<T[number]>(validStepQuery || defaultStepName)

  useEffect(() => {
    if (validStepQuery) {
      setCurrentStep(validStepQuery as T[number])
    }
  }, [validStepQuery])

  const onNavigateStep = (step: T[number]) => {
    router.push(`?step=${step}`)
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

    funnelWithStep.Step = Step

    return funnelWithStep
  }, [currentStep])

  return {
    FunnelStep,
    onNavigateStep
  }
}
