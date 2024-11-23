import { getMyPageData } from '@/entities/mypage/apis/get-mypage-data'
import MyPage from '@/views/MyPage'

export const metadata = {
  title: 'ANI | 마이페이지'
}

export default async function Page() {
  const data = await getMyPageData()

  if (!data) {
    return <div>데이터를 불러오는 데 실패했습니다.</div>
  }
  return <MyPage data={data} />
}
