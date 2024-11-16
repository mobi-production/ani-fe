'use client'

import { Icon } from '@repo/ui/client'
import { SolidButton } from '@repo/ui/server'
import { useCallback } from 'react'

type Props = {
  pathId: string
  isApplied: boolean
  isLoggedIn: boolean
}

function PathApplyButton({ pathId, isApplied, isLoggedIn }: Props) {
  const onClick = useCallback(() => {
    if (isApplied) {
      console.log('신청 취소하기')
    } else if (isLoggedIn) {
      console.log('신청하기', pathId)
    } else {
      console.log('로그인 후 신청하기')
    }
  }, [isApplied, isLoggedIn, pathId])

  return (
    <SolidButton
      onClick={onClick}
      variant={isApplied ? 'secondary' : 'primary'}
      fullWidth
      disabled={!isLoggedIn}
      rightIcon={<Icon name='RightOutlined' />}>
      {isApplied ? '신청 취소하기' : isLoggedIn ? '신청하기' : '로그인 후 신청하기'}
    </SolidButton>
  )
}

export default PathApplyButton
