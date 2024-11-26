import { getPathLoad } from '@/entities/path/lib/apis'
import { END_POINT } from '@/shared/config/constants/end-point'
import { notFound, redirect } from 'next/navigation'

type Props = {
  params: { pathId: string }
}

export default async function Page({ params }: Props) {
  const data = await getPathLoad(params.pathId)

  const { status, data: pathData } = data

  if (status === 404) {
    return notFound()
  }

  return redirect(END_POINT.PATH.PATH_PAGE(pathData.pathId, pathData.partId, pathData.pageId))
}
