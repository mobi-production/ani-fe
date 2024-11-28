import { getPathLoad } from '@/views/path/api/get-path-load'
import { notFound, redirect } from 'next/navigation'
import { Suspense } from 'react'

type Props = {
  params: { pathId: string }
}

async function PathLoader({ pathId }: { pathId: string }) {
  const data = await getPathLoad({ pathId })
  const { status, data: pathData } = data

  if (status === 404) {
    return notFound()
  }

  redirect(`/path/${pathId}/detail?partId=${pathData.partId}&pageId=${pathData.pageId}`)
}

export default async function Page({ params: { pathId } }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PathLoader pathId={pathId} />
    </Suspense>
  )
}
