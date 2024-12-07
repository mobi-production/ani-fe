'use client'

import { Icon } from '@repo/ui/client'
import { SolidButton } from '@repo/ui/server'

function PathCancleButton({ pathId }: { pathId: string | number }) {
  const handleClick = () => {
    console.log(pathId, '를 취소합니다.')
  }

  return (
    <>
      <SolidButton
        onClick={handleClick}
        variant='secondary'
        fullWidth
        rightIcon={<Icon name='RightOutlined' />}>
        신청 취소하기
      </SolidButton>
    </>
  )
}

export default PathCancleButton
