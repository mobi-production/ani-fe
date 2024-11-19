'use client'

import { SolidButton } from '@repo/ui/server'
import { useSubmitPathFeedback } from '../../lib/hooks'

function PathFeedbackSubmitButton() {
  const { onSubmitFeedback } = useSubmitPathFeedback()
  const onClick = () => {
    // 패스 피드백 제출하기
    onSubmitFeedback()
  }

  return (
    <SolidButton
      onClick={onClick}
      variant='primary'
      fullWidth>
      완료
    </SolidButton>
  )
}

export default PathFeedbackSubmitButton
