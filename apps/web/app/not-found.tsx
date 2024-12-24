import { ErrorPage } from '@/views/error/ui'

export default async function NotFound() {
  return (
    <ErrorPage
      title='앗, 페이지를 찾을 수 없어요'
      description={`죄송합니다.\n 찾으시려는 페이지가 없습니다.`}
    />
  )
}
