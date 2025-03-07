import { Flex } from '@repo/ui/server'
import { Fragment } from 'react'
import { BasePartType } from '@/shared/types/path'

type Props = {
  parts: BasePartType[]
}

function CurriculumLine({ height }: { height: string }) {
  return <div className={`w-[1.5px] bg-primary-normal ${height}`} />
}

type PathLinesProps = {
  content: BasePartType
  isLastContent: boolean
}

function PathLines({ content, isLastContent }: PathLinesProps) {
  if (isLastContent) return null

  return (
    <>
      <CurriculumLine height='h-[0.375rem]' /> {/* HeadLine */}
      <CurriculumLine height='h-[1rem]' /> {/* GapLine */}
      {content.page.map((_, index) => (
        <Fragment key={index}>
          <CurriculumLine height='h-[1.5rem]' /> {/* PathLine */}
          {index !== content.page.length - 1 && (
            <CurriculumLine height='h-[0.75rem]' /> /* PathGapLine */
          )}
        </Fragment>
      ))}
      <CurriculumLine height='h-[1.5rem]' /> {/* PartGapLine */}
      <CurriculumLine height='h-[0.375rem]' /> {/* HeadLine */}
      <CurriculumLine height='h-[1.625rem]' /> {/* PartLine */}
    </>
  )
}

function IntroduceCurriculumBar({ parts }: Props) {
  return (
    <Flex
      align='start'
      className='w-6 py-8'>
      <div className='w-[1.125rem]'>
        {parts.map((part, index) => (
          <Fragment key={index}>
            <div className='h-[1.125rem] w-[1.125rem] rounded-full border-[1.5px] border-primary-normal bg-mint-95' />
            <Flex
              direction='column'
              align='center'>
              <PathLines
                content={part}
                isLastContent={index === parts.length - 1}
              />
            </Flex>
          </Fragment>
        ))}
      </div>
    </Flex>
  )
}

export default IntroduceCurriculumBar
