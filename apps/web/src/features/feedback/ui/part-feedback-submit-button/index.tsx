'use client'

import { SolidButton } from '@repo/ui/server'
import { useSubmitPartFeedback } from '../../lib/hooks'

function PartFeedbackSubmitButton() {
  const { onSubmitFeedback } = useSubmitPartFeedback()
  const onClick = () => {
    // 파트 피드백 제출하기
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

export default PartFeedbackSubmitButton
