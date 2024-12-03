import type { ErrorResponse, MyPageData, MyPageProfileData } from '@/__mock__/types/mypage'

// 마이페이지 데이터 Response Type
export type GetMyPageResponse = MyPageData | ErrorResponse

// 마이페이지 프로필 데이터 Response Type
export type GetMyPageProfileResponse = MyPageProfileData | ErrorResponse
