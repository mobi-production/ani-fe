import { GetPathPageResponseType } from '@/entities/path/lib/types/apis'

type Props = {
  data: GetPathPageResponseType['data'] & { type: 'QUIZ' }
}

export default function PathQuiz({ data }: Props) {
  return <div>{JSON.stringify(data.quiz.quizs)}</div>
}
