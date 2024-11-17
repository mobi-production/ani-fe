'use client'

import { Icon } from '@repo/ui/client'
import { SolidButton } from '@repo/ui/server'
import { useCallback } from 'react'

type Props = {
  pathId: string
}

function PathCancleButton({ pathId }: Props) {
  const onClick = useCallback(() => {
    // 신청 취소하기
  }, [pathId])

  return (
    <SolidButton
      onClick={onClick}
      variant='secondary'
      fullWidth
      rightIcon={<Icon name='RightOutlined' />}>
      신청 취소하기
    </SolidButton>
  )
}

export default PathCancleButton
