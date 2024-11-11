export type FunnelStepProps<T extends string[]> = {
  stepName: T[number]
} & PropsNeedChildren

export type FunnelProps<T extends string[]> = {
  steps: T
  step: T[number]
  children: Array<ReactElement<FunnelStepProps<T>>> | ReactElement<FunnelStepProps<T>>
}
