import type { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata({
  params
}: {
  params: { pathId: string; partId: string }
}): Promise<Metadata> {
  /**
   * TODO: 패스, 파트명 가져오는 로직 추가
   * 현재는 동적 라우팅에 사용된 id 값을 그대로 반영하고 있습니다.
   */
  const { partId, pathId } = params
  const pathName = pathId
  const partName = partId

  return {
    title: `ANI | 피드백`,
    description: `${pathName} 패스 ${partName} 파트에 대한 피드백 페이지입니다.`
  }
}

export default function Page() {
  return <FeedbackPage />
}
