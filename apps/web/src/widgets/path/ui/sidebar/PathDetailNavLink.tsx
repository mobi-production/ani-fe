'use client'

import { Flex } from '@repo/ui/server'
import Tabs from '@/shared/ui/tabs'
import InformationBlock from './InformationBlock'
import CheckCurriculumBlock from './CheckCurriculumBlock'
import { GetPathStatusResponseType } from '@/views/path/api/get-path-status'

type Props = GetPathStatusResponseType['data']

function SidebarPathDetailNavLink({ path, curriculum, quiz }: Props) {
  return (
    <Flex
      direction='column'
      asChild
      gap={48}>
      <section className='w-[23.75rem] rounded-xl bg-background-normal px-[2.375rem] pb-[4.5rem] pt-[3rem]'>
        <Tabs
          defaultValue='information'
          className='gap-12'
          lazyMount>
          <Tabs.List className='justify-between gap-0'>
            <Tabs.Trigger
              value='information'
              className='h-[3.75rem] px-5 py-4'>
              정보
            </Tabs.Trigger>
            <Tabs.Trigger
              value='curriculum'
              className='h-[3.75rem] px-5 py-4'>
              커리큘럼
            </Tabs.Trigger>
            <Tabs.Trigger
              value='quiz'
              className='h-[3.75rem] px-5 py-4'>
              퀴즈
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value='information'>
            <InformationBlock {...path} />
          </Tabs.Content>
          <Tabs.Content value='curriculum'>
            <CheckCurriculumBlock parts={curriculum.parts} />
          </Tabs.Content>
          <Tabs.Content value='quiz'>
            <CheckCurriculumBlock parts={quiz.parts} />
          </Tabs.Content>
        </Tabs>
      </section>
    </Flex>
  )
}

export default SidebarPathDetailNavLink
