import type { MyPageProfileData } from '@/__mock__/types/mypage'

export type PutMyPageProfileRequestType = Omit<MyPageProfileData, 'emailVerified'>

export type PutMyPageProfileResponse = {
  status: number
  message?: string
}

export type DeleteMyPageParams = {
  userId: string
}

export type DeleteMyPageResponse = {
  status: number
  message?: string
}
