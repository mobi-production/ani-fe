import { pathIntroduce } from '@/__mock__/data/path'
import IntroducePage from '@/views/IntroducePage'

export default function Page() {
  const data = pathIntroduce
  return <IntroducePage data={data} />
}
