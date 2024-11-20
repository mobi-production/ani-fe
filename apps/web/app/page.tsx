import { getMainData } from '@/entities/main/lib/apis/get-main-data'
import MainPage from '@/views/MainPage'

export const metadata = {
  title: 'ANI | 메인 페이지',
  description:
    'ANI는 시간과 비용 부담 없이 꿈을 찾고 방향을 잡을 수 있도록, 누구나 쉽게 배울 수 있는 양질의 코딩 교육을 제공합니다.'
}

export default async function Home() {
  const data = await getMainData()

  if (!data) {
    return <div>데이터를 불러오는 데 실패했습니다.</div>
  }
  return <MainPage data={data} />
}
