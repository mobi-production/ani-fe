export const PATH_END_POINT = {
  INTRODUCE: (pathId: string | number) => `/path/${pathId}/introduce`
}

export const PATH_QUERY_KEYS = {
  INTRODUCE: (pathId: string) => ['pathIntroduce', pathId] as string[]
}
