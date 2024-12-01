import UserPathDropdown from '@/entities/question/ui/user-path-drop-down'
import { useState } from 'react'
import { SolidButton, Flex, Typography, SpacingBlock } from '@repo/ui/server'
import { Input, TextArea } from '@repo/ui/client'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  QuestionFormData,
  questionSubmitSchema
} from '@/features/path/model/question-submit-schema'

type Props = {
  defaultPathName?: string
  defaultTitle?: string
  defaultContents?: string
}

function SubmitQuestionSection({ defaultContents, defaultPathName, defaultTitle }: Props) {
  const [currentPathName, setCurrentPathName] = useState(defaultPathName ?? '전체')
  const handleSelectPathName = (value: string) => {
    setCurrentPathName(value)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control
  } = useForm<QuestionFormData>({
    resolver: zodResolver(questionSubmitSchema),
    defaultValues: {
      title: defaultTitle ?? '',
      contents: defaultContents ?? ''
    }
  })

  const [title, contents] = useWatch({
    control,
    name: ['title', 'contents'],
    defaultValue: {
      title: '',
      contents: ''
    }
  })

  const isFormInvalid = !title || !contents || isSubmitting

  const onSubmitQuestion = async (formData: QuestionFormData) => {
    console.log(formData)
    // 질문 남기기 섹션으로 이동
  }

  return (
    <div className='w-full'>
      <UserPathDropdown
        currentPathName={currentPathName}
        handleSelectPathName={handleSelectPathName}
      />
      <SpacingBlock size={20} />
      <form onSubmit={handleSubmit(onSubmitQuestion)}>
        <Typography
          variant={'body-2-normal'}
          fontWeight={'semibold'}>
          제목
        </Typography>
        <SpacingBlock size={8} />
        <Input
          {...register('title')}
          placeholder='제목을 입력해주세요'
          isError={!!errors.title}
          errorMessage={errors.title?.message}
          styleVariant='GHOST'
        />
        <SpacingBlock size={16} />
        <Typography
          variant={'body-2-normal'}
          fontWeight={'semibold'}>
          질문 내용
        </Typography>
        <SpacingBlock size={8} />
        <TextArea>
          <TextArea.form
            {...register('contents')}
            placeholder='궁금하신 내용을 입력해주세요'
            isError={!!errors.contents}
            errorMessage={errors.contents?.message}
            className='h-[12.5rem] w-full p-3 placeholder:font-medium'
          />
        </TextArea>
        <SpacingBlock size={20} />
        <SolidButton
          variant='primary'
          fullWidth
          className='rounded-[0.25rem]'
          disabled={isFormInvalid}>
          질문 남기기
        </SolidButton>
      </form>
    </div>
  )
}

export default SubmitQuestionSection
