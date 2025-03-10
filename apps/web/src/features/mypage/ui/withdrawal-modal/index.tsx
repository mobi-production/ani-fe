import CommonModal, { ICON_THEME } from '@/shared/ui/modal'
import { deleteMyProfile } from '../../api'

type WithdrawalModalProps = {
  isOpen: boolean
  onClose: () => void
}

function WithdrawalModal({ isOpen, onClose }: WithdrawalModalProps) {
  const onSubmit = async () => {
    const response = await deleteMyProfile({ userId: '1' })
    console.log(response)
  }

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}>
      <CommonModal.icon iconTheme={ICON_THEME.ERROR} />
      <CommonModal.title>정말 탈퇴하시겠어요?</CommonModal.title>
      <CommonModal.description>
        탈퇴 후 삭제되는 모든 정보는 복구할 수 없어요
      </CommonModal.description>
      <CommonModal.buttonSet
        primaryText='탈퇴하기'
        subText='계정 유지하기'
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </CommonModal>
  )
}

export default WithdrawalModal
