import { getMyPageData, getMyProfileData } from '@/views/mypage/api'
import MyPage from '@/views/mypage/ui'

export const metadata = {
  title: 'ANI | 마이페이지'
}

export default async function Page() {
  const myPageData = await getMyPageData()
  const myPageProfileData = await getMyProfileData()

  // ErrorResponse 처리 예정
  if ('status' in myPageData || 'status' in myPageProfileData) {
    return <div>데이터를 불러오는 데 실패했습니다.</div>
  }
  return (
    <MyPage
      myPageData={myPageData}
      myPageProfileData={myPageProfileData}
    />
  )
}
