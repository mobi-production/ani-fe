'use client'

import { Icon } from '@repo/ui/client'
import { SolidButton } from '@repo/ui/server'
import { useCallback } from 'react'

type Props = {
  pathId: string | number
}

function PathApplyButton({ pathId }: Props) {
  const isLoggedIn = false
  const onClick = useCallback(() => {
    if (isLoggedIn) {
      // 신청하기
    } else {
      // 로그인 권유 팝업 띄우기
    }
  }, [isLoggedIn, pathId])

  return (
    <SolidButton
      onClick={onClick}
      variant='primary'
      fullWidth
      rightIcon={<Icon name='RightOutlined' />}>
      신청하기
    </SolidButton>
  )
}

export default PathApplyButton
