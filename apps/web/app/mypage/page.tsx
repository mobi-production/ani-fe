import { getMyPageData, getMyProfileData } from '@/entities/mypage/lib/apis'
import MyPage from '@/views/MyPage'

export const metadata = {
  title: 'ANI | 마이페이지'
}

export default async function Page() {
  const myPageData = await getMyPageData()
  const myPageProfileData = await getMyProfileData()

  if (!myPageData || !myPageProfileData) {
    return <div>데이터를 불러오는 데 실패했습니다.</div>
  }
  return (
    <MyPage
      myPageData={myPageData}
      myPageProfileData={myPageProfileData}
    />
  )
}
