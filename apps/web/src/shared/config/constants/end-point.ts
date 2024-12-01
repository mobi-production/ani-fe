export const END_POINT = {
  MAIN: '/main',
  MYPAGE: {
    MAIN: '/mypage',
    MY_PROFILE: '/my-profile'
  },
  PATH: {
    INTRODUCE: (pathId: string) => `/path/${pathId}`,
    PATH_SIDEBAR_STATUS: (pathId: string) => `/path/${pathId}/sidebar-status`,
    PATH_PAGE: (pathId: string, partId: string, pageId: string) =>
      `/path/${pathId}/detail?partId=${partId}&pageId=${pageId}`,
    PATH_LOAD: (pathId: string) => `/path/${pathId}/load`
  }
}
