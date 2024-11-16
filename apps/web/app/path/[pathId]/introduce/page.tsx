import { pathIntroduce } from '@/__mock__/data/path'
import IntroducePage from '@/views/IntroducePage'
import { Metadata } from 'next'

export async function generateMetadata({
  params
}: {
  params: { pathId: string }
}): Promise<Metadata> {
  /**
   * TODO: 패스명 가져오는 로직 추가
   * 현재는 동적 라우팅에 사용된 id 값을 그대로 반영하고 있습니다.
   */
  const { pathId } = params
  const pathName = pathId

  return {
    title: `ANI | 패스 소개`,
    description: `${pathName} 패스에 대한 소개 페이지입니다.`
  }
}

// TODO: 로그인 상태 추가
const isLoggedIn = false

export default function Page() {
  const data = pathIntroduce
  return (
    <IntroducePage
      data={data}
      isLoggedIn={isLoggedIn}
    />
  )
}
