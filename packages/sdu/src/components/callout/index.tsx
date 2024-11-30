import cn from '@repo/sdu/libs/cn'
import { ColorStyle } from '@repo/sdu/types/common'
import { Flex, Typography } from '@repo/ui/server'

import SDUText, { TextProps } from '../text'

type Props = {
  icon: string
  rich_text: TextProps[]
  style?: ColorStyle
}

function SDUCallout({ icon, rich_text, style }: Props) {
  return (
    <Flex
      asChild
      gap={20}
      align='center'>
      <div
        className={cn(
          'w-full rounded bg-cool-neutral-99 p-5',
          style?.backgroundColor && 'bg-cool-neutral-99'
        )}
        style={style}>
        <Typography
          variant='heading-1'
          fontWeight='semibold'>
          {icon}
        </Typography>
        <SDUCalloutText rich_text={rich_text} />
      </div>
    </Flex>
  )
}

function SDUCalloutText({ rich_text }: { rich_text: TextProps[] }) {
  return (
    <SDUText
      rich_text={rich_text}
      tag='p'
    />
  )
}

export default SDUCallout
