'use client'

import Link from 'next/link'
import { Flex, Typography } from '@repo/ui/server'
import { useCallback } from 'react'

type NavigationLinksProps = {
  links: { id: string; title: string; ref: React.RefObject<HTMLDivElement> }[]
}

const NavigationLinks = ({ links }: NavigationLinksProps) => {
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
          className='cursor-pointer px-[0.5rem] py-[1.25rem]'>
          <Typography
            variant='body-1-normal'
            fontWeight='medium'
            className='hover:border-b-2 hover:border-solid hover:border-primary-normal'>
            {title}
          </Typography>
        </Link>
      ))}
    </Flex>
  )
}

export default NavigationLinks
