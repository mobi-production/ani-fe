import { SolidButton } from '@repo/ui/server'

type MyPageEditButtonProps = {
  onClick: () => void
}

function MyPageEditButton({ onClick }: MyPageEditButtonProps) {
  return (
    <SolidButton
      onClick={onClick}
      size='medium'
      disabled={false}>
      수정하기
    </SolidButton>
  )
}

export default MyPageEditButton
