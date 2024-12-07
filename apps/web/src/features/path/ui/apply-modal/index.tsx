import CommonModal, { ICON_THEME } from '@/shared/ui/modal'

type Props = {
  isModalOpen: boolean
  handleModalClose: () => void
  pathId: string
}

function PathApplyModal({ isModalOpen, handleModalClose, pathId }: Props) {
  const handleSubmit = () => {
    console.log(pathId)
    handleModalClose()
  }

  return (
    <CommonModal
      isOpen={isModalOpen}
      onClose={handleModalClose}>
      <CommonModal.icon iconTheme={ICON_THEME.ERROR} />
      <CommonModal.title>패스를 신청할까요?</CommonModal.title>
      <CommonModal.description className='whitespace-pre-line'>
        {`패스 신청을 취소하면
패널티를 받을 수 있어요`}
      </CommonModal.description>
      <CommonModal.buttonSet
        primaryText='신청하기'
        subText='취소하기'
        onSubmit={handleSubmit}
        onCancel={handleModalClose}
      />
    </CommonModal>
  )
}

export default PathApplyModal
