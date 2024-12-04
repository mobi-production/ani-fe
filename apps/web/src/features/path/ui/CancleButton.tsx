'use client'

import { Icon } from '@repo/ui/client'
import { SolidButton } from '@repo/ui/server'
import { deletePathApplyCancel } from '../api'
import { useTransition } from 'react'

type Props = {
  pathId: string | number
}

function PathCancleButton({ pathId }: Props) {
  const [isPending, startTransition] = useTransition()

  const handleClick = async () => {
    startTransition(async () => {
      await deletePathApplyCancel({ pathId: pathId.toString() })
    })
  }

  return (
    <SolidButton
      onClick={handleClick}
      variant='secondary'
      fullWidth
      rightIcon={<Icon name='RightOutlined' />}
      disabled={isPending}>
      신청 취소하기
    </SolidButton>
  )
}

export default PathCancleButton
