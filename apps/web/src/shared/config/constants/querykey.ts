export const QUERY_KEYS = {
  PATH: {
    INTRODUCE: (pathId: string) => ['pathIntroduce', pathId] as string[],
    PATH_PAGE: (pathId: string, partId: string, pageId: string) =>
      ['pathPage', pathId, partId, pageId] as string[],
    SIDEBAR_STATUS: (pathId: string) => ['pathSidebarStatus', pathId] as string[]
  }
}
