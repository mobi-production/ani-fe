import { PathIntroduce } from '@/__mock__/data/path'

type IntroducePageProps = {
  data: PathIntroduce
}

export default function IntroducePage({ data }: IntroducePageProps) {
  return <div>{data.title}</div>
}
