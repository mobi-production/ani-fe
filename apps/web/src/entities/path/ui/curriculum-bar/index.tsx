import { Flex } from '@repo/ui/server'
import { PathIntroduce } from '../../model/path-introduce'

type Props = {
  pathContents: PathIntroduce['pathContents']
}

function CurriculumBar({ pathContents }: Props) {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      className='py-1'>
      {pathContents.map((content, index) => (
        <>
          <div className='h-[1.125rem] w-[1.125rem] rounded-full border-[1.5px] border-primary-normal bg-mint-95'></div>
          <Flex
            direction={'column'}
            align={'center'}>
            {index !== pathContents.length - 1 && (
              <>
                <div className='h-[0.75rem] w-[1.5px] bg-primary-normal' />
                <div className='h-[1.75rem] w-[1.5px] bg-primary-normal' />
                {content.path.map((_, index) => (
                  <div
                    key={index}
                    className='h-[1.75rem] w-[1.5px] bg-primary-normal'
                  />
                ))}
                <div className='h-[1.4rem] w-[1.5px] bg-primary-normal' />
              </>
            )}
          </Flex>
        </>
      ))}
    </Flex>
  )
}

export default CurriculumBar
