'use client'

import Link from 'next/link'
import { Flex, Typography } from '@repo/ui/server'
import { useCallback, useEffect, useState } from 'react'
import cn from '@repo/util/cn'

type NavigationLinksProps = {
  links: { id: string; title: string }[]
  moveHeightOffset?: number
}

const NavigationLinks = ({ links, moveHeightOffset = 40 }: NavigationLinksProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleLinkClick = useCallback(
    (index: number, e: React.MouseEvent) => {
      e.preventDefault()
      if (!links[index]) return

      const element = document.getElementById(links[index].id)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - 70 - moveHeightOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        setActiveIndex(index)
      }
    },
    [links, moveHeightOffset]
  )

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      const sectionPositions = links.map((link) => {
        const element = document.getElementById(link.id)
        return element?.offsetTop || 0
      })

      const currentSectionIndex = sectionPositions.findIndex((position, index) => {
        const nextPosition = sectionPositions[index + 1] || Infinity
        return scrollPosition >= position && scrollPosition < nextPosition
      })

      if (currentSectionIndex !== -1) {
        setActiveIndex(currentSectionIndex)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [links])

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
