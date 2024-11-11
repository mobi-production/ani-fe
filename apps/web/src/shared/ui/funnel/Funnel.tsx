import { Children, createContext, isValidElement, ReactElement, useContext } from 'react'
import type { FunnelProps, FunnelStepProps } from './funnel-type'

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

function FunnelStep<T extends string[]>({ children }: FunnelStepProps<T>) {
  return <>{children}</>
}

Funnel.Step = FunnelStep

export default Funnel
