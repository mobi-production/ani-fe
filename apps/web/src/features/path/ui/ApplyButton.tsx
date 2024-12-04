'use client'

import { Icon } from '@repo/ui/client'
import { SolidButton } from '@repo/ui/server'
import { postPathApply } from '../api'
import { useTransition } from 'react'

type Props = {
  pathId: string | number
}

function PathApplyButton({ pathId }: Props) {
  const isLoggedIn = true
  const [isPending, startTransition] = useTransition()

  const handleClick = async () => {
    if (isLoggedIn) {
      startTransition(async () => {
        await postPathApply({ pathId: pathId.toString() })
      })
    } else {
      alert('로그인 후 이용해주세요.')
    }
  }

  return (
    <SolidButton
      onClick={handleClick}
      variant='primary'
      fullWidth
      rightIcon={<Icon name='RightOutlined' />}
      disabled={isPending}>
      신청하기
    </SolidButton>
  )
}

export default PathApplyButton
