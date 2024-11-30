import { getPathIntroduce } from '@/views/path/api/get-path-introduce'
import { PathIntroducePage } from '@/views/path/ui/IntroducePage'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

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

export default async function Page({ params: { pathId } }: { params: { pathId: string } }) {
  const data = await getPathIntroduce({ pathId })

  if (!data) {
    return notFound()
  }

  return <PathIntroducePage data={data.data} />
}
