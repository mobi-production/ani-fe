import { Divider } from '@repo/ui/server'

import NavigationLinks from '@/shared/ui/navigation-links'
import { Flex } from '@repo/ui/server'

type Props = {
  links: { id: string; title: string }[]
}

function PathNavigationLinks({ links }: Props) {
  return (
    <Flex
      direction={'column'}
      className='sticky top-0 w-full bg-inherit'>
      <NavigationLinks
        links={links}
        moveHeightOffset={0}
      />
      <Divider />
    </Flex>
  )
}

export default PathNavigationLinks
