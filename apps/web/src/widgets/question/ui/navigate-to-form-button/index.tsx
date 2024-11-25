'use client'

import { SolidButton } from '@repo/ui/server'

function NavigateToFormButton() {
  const onClick = () => {
    // 질문 남기기로 이동
  }

  return (
    <SolidButton
      onClick={onClick}
      variant='primary'
      fullWidth
      className='rounded-[0.25rem]'>
      질문 남기기
    </SolidButton>
  )
}

export default NavigateToFormButton
