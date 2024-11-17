import IntroducePage from '@/views/IntroducePage'
import { Metadata } from 'next'

export async function generateMetadata({
  params
}: {
  params: { pathId: string }
}): Promise<Metadata> {
  const { pathId } = params
  const pathName = pathId

  return {
    title: `ANI | 패스 소개`,
    description: `${pathName} 패스에 대한 소개 페이지입니다.`
  }
}

export default function Page({ params }: { params: { pathId: string } }) {
  return <IntroducePage pathId={params.pathId} />
}
