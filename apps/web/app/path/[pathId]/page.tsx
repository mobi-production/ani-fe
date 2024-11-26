import { getPathIntroduce } from '@/entities/path/lib/apis'
import { PathIntroducePage } from '@/views/IntroducePage'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

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

export default async function Page({ params }: { params: { pathId: string } }) {
  const data = await getPathIntroduce(params.pathId)

  if (!data) {
    return notFound()
  }

  return <PathIntroducePage data={data.data} />
}
