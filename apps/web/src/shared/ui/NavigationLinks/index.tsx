'use client'

import Link from 'next/link'
import { Flex, Typography } from '@repo/ui/server'
import { RefObject, useCallback, useEffect, useState } from 'react'
import cn from '@repo/util/cn'
import { useIntersectionObserver } from '@/shared/hook/use-intersection-observer'

type NavigationLinksProps<T extends RefObject<Element>> = {
  links: { id: string; title: string; ref: T }[]
  moveHeightOffset?: number
}

const NavigationLinks = <T extends RefObject<Element>>({
  links,
  moveHeightOffset = 40
}: NavigationLinksProps<T>) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleLinkClick = useCallback((index: number, e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      const element = links.find((_, i) => i === index)?.ref.current
      if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - 70 - moveHeightOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
      setActiveIndex(index)
    }
  }, [])

  links.forEach((_, index) => {
    if (!links[index]) return

    const { isIntersecting } = useIntersectionObserver({
      threshold: 0.2,
      root: null,
      rootMargin: '-100px 0px',
      targetRef: links[index].ref
    })

    useEffect(() => {
      if (isIntersecting) {
        setActiveIndex(index)
      }
    }, [isIntersecting])
  })

  return (
    <Flex gap={12}>
      {links.map(({ id, title }, index) => (
        <Link
          key={index}
          href={`#${id}`}
          onClick={(e) => handleLinkClick(index, e)}
          className={cn(
            'cursor-pointer px-[0.5rem] py-[1.25rem]',
            activeIndex === index && 'box-border border-b-2 border-solid border-neutral-5'
          )}>
          <Typography
            variant='title-3'
            fontWeight='bold'
            color={activeIndex === index ? 'normal' : 'alternative'}>
            {title}
          </Typography>
        </Link>
      ))}
    </Flex>
  )
}

export default NavigationLinks
