import { SolidButton } from '@repo/ui/server'

function MyPageEditButton() {
  const onClick = () => {
    // 모달 visible 상태 변경
  }

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
