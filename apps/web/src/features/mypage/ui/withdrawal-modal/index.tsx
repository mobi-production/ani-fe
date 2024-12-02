import CommonModal, { ICON_THEME } from '@/shared/ui/modal'

type WithdrawalModalProps = {
  isOpen: boolean
  onClose: () => void
}

function WithdrawalModal({ isOpen, onClose }: WithdrawalModalProps) {
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
        onSubmit={() => {}}
        onCancel={onClose}
      />
    </CommonModal>
  )
}

export default WithdrawalModal
