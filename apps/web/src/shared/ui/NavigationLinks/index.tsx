'use client'

import Link from 'next/link'
import { Flex, Typography } from '@repo/ui/server'
import { useCallback } from 'react'
import cn from '@repo/util/cn'

type NavigationLinksProps = {
  links: { id: string; title: string; ref: React.RefObject<HTMLDivElement> }[]
  firstLinkActive?: boolean
}

const NavigationLinks = ({ links, firstLinkActive }: NavigationLinksProps) => {
  const handleLinkClick = useCallback((index: number, e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      links
        .find((_, i) => i === index)
        ?.ref.current?.scrollIntoView({
          behavior: 'smooth'
        })
    }
  }, [])

  return (
    <Flex gap={12}>
      {links.map(({ id, title }, index) => (
        <Link
          key={index}
          href={`#${id}`}
          onClick={(e) => handleLinkClick(index, e)}
          className={cn(
            'cursor-pointer px-[0.5rem] py-[1.25rem]',
            firstLinkActive && index === 0 && 'box-border border-b-2 border-solid border-neutral-5'
          )}>
          <Typography
            variant='title-3'
            fontWeight='bold'
            color={firstLinkActive && index === 0 ? 'normal' : 'alternative'}>
            {title}
          </Typography>
        </Link>
      ))}
    </Flex>
  )
}

export default NavigationLinks
