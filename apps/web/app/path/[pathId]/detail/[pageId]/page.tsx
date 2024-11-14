import type { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params
}: {
  params: { pathId: string }
}): Promise<Metadata> {
  /**
   * TODO: 패스명 가져오는 로직 추가
   * 현재는 동적 라우팅에 사용된 id 값을 그대로 반영하고 있습니다.
   */
  const pathName = params.pathId

  return {
    title: `ANI | ${pathName}`,
    description: `${pathName} 패스 상세 페이지입니다.`
  }
}

export default function Page() {
  return <div>패스 상세 페이지입니다.</div>
}
