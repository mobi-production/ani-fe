export const END_POINT = {
  PATH_APPLY: (pathId: string | number) => `/path/${pathId}/apply`,
  PATH_APPLY_CANCEL: (pathId: string | number) => `/path/${pathId}/apply`
}

export const QUERY_KEYS = {
  PATH: {
    PATH_APPLY_CANCEL: (pathId: string) => ['pathApplyCancel', pathId] as string[],
    PATH_APPLY: (pathId: string) => ['pathApply', pathId] as string[]
  }
}
