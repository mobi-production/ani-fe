import { ReplyFormData, replySubmitSchema } from '@/features/path/model/question-submit-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Icon, Input } from '@repo/ui/client'
import { Flex, SolidButton } from '@repo/ui/server'
import { useForm, useWatch } from 'react-hook-form'

function SubmitReplySection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control
  } = useForm<ReplyFormData>({
    resolver: zodResolver(replySubmitSchema),
    defaultValues: {
      reply: ''
    }
  })

  const [reply] = useWatch({
    control,
    name: ['reply'],
    defaultValue: {
      reply: ''
    }
  })

  const isFormInvalid = !reply || isSubmitting

  const onSubmitReply = async (formData: ReplyFormData) => {
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitReply)}>
      <Flex
        gap={8}
        className='w-full'>
        <Input
          {...register('reply')}
          placeholder='질문을 입력해주세요'
          isError={!!errors.reply}
          errorMessage={errors.reply?.message}
          styleVariant='GHOST'
          backgroundClassName='h-[2.5rem] w-[17.5rem]'
          className='text-caption-1 text-[0.75rem] placeholder:text-[0.75rem] placeholder:font-medium'
        />
        <SolidButton
          variant='primary'
          className='rounded-[0.25rem]'
          size={'small'}
          disabled={isFormInvalid}>
          <Icon
            name='ArrowUpOutlined'
            size={16}
          />
        </SolidButton>
      </Flex>
    </form>
  )
}

export default SubmitReplySection
