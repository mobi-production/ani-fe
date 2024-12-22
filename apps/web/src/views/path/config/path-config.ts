export const PATH_END_POINT = {
  INTRODUCE: (pathId: string | number) => `/api/v1/path?id=${pathId}`
}

export const PATH_QUERY_KEYS = {
  INTRODUCE: (pathId: string) => ['pathIntroduce', pathId] as string[]
}
