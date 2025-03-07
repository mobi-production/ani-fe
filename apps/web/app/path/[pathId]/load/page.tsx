import { getPathLoad } from '@/views/path/api/get-path-load'
import { notFound, redirect } from 'next/navigation'

type Props = {
  params: { pathId: string }
}

export default async function Page({ params: { pathId } }: Props) {
  const data = await getPathLoad({ pathId })
  const { status, data: pathData } = data

  if (status === 404) {
    return notFound()
  }

  redirect(`/path/${pathId}/detail?partId=${pathData.partId}&pageId=${pathData.pageId}`)
}
