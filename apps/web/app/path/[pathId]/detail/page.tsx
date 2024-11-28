import type { Metadata } from 'next'
import { getPathPage } from '@/entities/path/lib/apis/get-path-page'
import { notFound } from 'next/navigation'
import PathDetailPage from '@/views/PathDetailPage'

export async function generateMetadata({
  params,
  searchParams
}: {
  params: { pathId: string }
  searchParams: { partId: string; pageId: string }
}): Promise<Metadata> {
  if (!params.pathId || !searchParams.partId || !searchParams.pageId) {
    return {
      title: '페이지를 찾을 수 없습니다',
      description: '요청하신 페이지를 찾을 수 없습니다.'
    }
  }

  const {
    data: { pageName, partName }
  } = await getPathPage({
    pathId: params.pathId,
    partId: searchParams.partId,
    pageId: searchParams.pageId
  })

  return {
    title: `${partName} | ${pageName}`,
    description: `${partName} 파트의 ${pageName} 페이지입니다.`
  }
}

export default async function Page({
  searchParams: { partId, pageId },
  params: { pathId }
}: {
  searchParams: { partId: string; pageId: string }
  params: { pathId: string }
}) {
  if (!pathId || !partId || !pageId) {
    return notFound()
  }

  const data = await getPathPage({ pathId, partId, pageId })

  if (!data) {
    return notFound()
  }

  return <PathDetailPage data={data.data} />
}
