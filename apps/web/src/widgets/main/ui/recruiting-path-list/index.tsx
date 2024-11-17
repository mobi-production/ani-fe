import { PathData } from '@/__mock__/data/main'

type RecruitingPathListProps = {
  pathData: PathData
}

function RecruitingPathList({ pathData }: RecruitingPathListProps) {
  if (!pathData) return null
  return <div>RecruitingPathList</div>
}

export default RecruitingPathList
