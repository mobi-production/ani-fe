import { Modal, TextArea } from '@repo/ui/client'
import { useState } from 'react'
import { SolidButton, TextButton, Typography } from '@repo/ui/server'
import { Flex } from '@repo/ui/server'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InterruptionFormData } from '../../model/interruption-submit-schema'
import { interruptionSubmitSchema } from '../../model/interruption-submit-schema'
import { deletePathApplyCancel } from '../../api'
import { useRouter } from 'next/navigation'

type Props = {
  isModalOpen: boolean
  pathId: string
  handleModalClose: () => void
}

function PathInterruptionModal({ isModalOpen, handleModalClose, pathId }: Props) {
  const router = useRouter()
  const [modalStep, setModalStep] = useState<'apply-open' | 'apply-form'>('apply-open')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control
  } = useForm<InterruptionFormData>({
    resolver: zodResolver(interruptionSubmitSchema),
    defaultValues: {
      reason: ''
    }
  })

  const [reason] = useWatch({
    control,
    name: ['reason'],
    defaultValue: {
      reason: ''
    }
  })

  const isFormInvalid = !reason || isSubmitting

  const onSubmit = async (formData: InterruptionFormData) => {
    const { reason } = formData
    if (!reason || !pathId) return

    await deletePathApplyCancel({ pathId, reason })
    handleModalClose()
    router.refresh()
  }

  const handleNextStep = () => {
    setModalStep('apply-form')
  }

  return (
    <Modal
      className='w-full max-w-[37.5rem] px-[3.125rem] pb-[3rem] pt-[4rem]'
      isOpen={isModalOpen}
      onClose={handleModalClose}>
      {modalStep === 'apply-open' ? (
        <Flex
          direction='column'
          gap={48}>
          <Flex
            direction='column'
            gap={32}>
            <Flex
              direction='column'
              gap={4}
              align='start'>
              <Typography
                variant={'title-2'}
                fontWeight={'bold'}>
                패스를 취소할까요?
              </Typography>
              <Typography
                fontWeight={'medium'}
                className='whitespace-pre-line text-left'>
                {`패스 수료까지`} <span className='text-primary-normal'>{`30일`}</span>
                {` 남았어요.`}
                <br />
                <span className='text-primary-normal'>{`50%`}</span>
                {`만 더 하면 패스를 수료할 수 있어요.`}
              </Typography>
            </Flex>
            <Flex
              direction='column'
              align={'start'}
              gap={4}>
              <Typography
                variant='body-2-normal'
                fontWeight='semibold'>
                패스 중도 취소 시 유의사항
              </Typography>
              <ol>
                <Flex
                  direction='row'
                  align={'start'}
                  asChild>
                  <li>
                    <Flex
                      align='center'
                      className='p-[0.625rem]'>
                      <i className='h-1 w-1 rounded bg-label-neutral' />
                    </Flex>
                    <Typography
                      color='neutral'
                      variant={'body-2-normal'}
                      className='whitespace-pre-line text-left'>
                      {`현재까지 진행된 모든 학습 내용은 초기화되며, 이후 다시 패스를\n 신청할 경우 처음부터 시작해요.`}
                    </Typography>
                  </li>
                </Flex>
                <Flex
                  direction='row'
                  align={'start'}
                  asChild>
                  <li>
                    <Flex
                      align='center'
                      className='p-[0.625rem]'>
                      <i className='h-1 w-1 rounded bg-label-neutral' />
                    </Flex>
                    <Typography
                      color='neutral'
                      variant={'body-2-normal'}
                      className='whitespace-pre-line text-left'>
                      {`추후 MOBI-ANI의 다른 패스 진행 시 `}
                      <span className='font-semibold text-status-error'>{`패널티가 적용`}</span>
                      {`될 수 있어요.`}
                    </Typography>
                  </li>
                </Flex>
              </ol>
            </Flex>
          </Flex>
          <Flex
            direction='column'
            gap={12}
            className='w-full'>
            <SolidButton
              size='large'
              fullWidth
              onClick={handleModalClose}>
              계속 함께하기
            </SolidButton>
            <TextButton
              size='large'
              onClick={handleNextStep}>
              사유 제출 후 취소하기
            </TextButton>
          </Flex>
        </Flex>
      ) : (
        <Flex
          direction='column'
          gap={48}
          asChild>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex
              direction='column'
              gap={32}>
              <Flex
                direction='column'
                gap={4}
                align='start'>
                <Typography
                  variant={'title-2'}
                  fontWeight={'bold'}>
                  패스를 취소할게요
                </Typography>
                <Typography
                  fontWeight={'medium'}
                  className='whitespace-pre-line text-left'>
                  취소 승인까지 최대 일주일의 기간이 소요될 수 있어요.
                </Typography>
              </Flex>
              <TextArea>
                <TextArea.form
                  {...register('reason')}
                  isError={!!errors.reason}
                  errorMessage={errors.reason?.message}
                  className='h-[12.5rem] w-[31.5rem] p-4'
                  maxLength={500}
                  placeholder='취소 사유를 입력해주세요'
                />
              </TextArea>
            </Flex>
            <Flex
              direction='column'
              gap={12}
              className='w-full'>
              <SolidButton
                type='submit'
                size='large'
                fullWidth
                disabled={isFormInvalid}>
                제출하기
              </SolidButton>
            </Flex>
          </form>
        </Flex>
      )}
    </Modal>
  )
}

export default PathInterruptionModal
