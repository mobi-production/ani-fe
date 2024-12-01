export const QUERY_KEYS = {
  MAIN: ['main'] as string[],
  AUTH: {
    LOGIN: ['authLogin'] as string[],
    SIGNUP: ['authSignup'] as string[]
  },
  MYPAGE: {
    MAIN: ['mypageMain'] as string[],
    MY_PROFILE: ['mypageMyProfile'] as string[]
  },
  PATH: {
    INTRODUCE: (pathId: string) => ['pathIntroduce', pathId] as string[],
    PATH_PAGE: (pathId: string, partId: string, pageId: string) =>
      ['pathPage', pathId, partId, pageId] as string[],
    SIDEBAR_STATUS: (pathId: string) => ['pathSidebarStatus', pathId] as string[]
  }
}
