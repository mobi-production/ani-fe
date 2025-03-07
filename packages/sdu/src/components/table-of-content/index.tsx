'use client'

import { ColorStyle } from '@repo/sdu/types/common'
import { Flex, Typography } from '@repo/ui/server'
import { useEffect, useState } from 'react'

type TOCItem = {
  id: string
  text: string
  depth: number
}

type Props = {
  style?: ColorStyle
}

function TableOfContents({ style }: Props) {
  const [headings, setHeadings] = useState<TOCItem[]>([])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[id^="heading"]'))
    const items = elements.map((element) => ({
      id: element.id,
      text: element.getAttribute('data-text') ?? '',
      depth: parseInt(element.id.split('-')[1] ?? '9')
    }))
    setHeadings(items)
  }, [])

  if (headings.length === 0) {
    return null
  }

  return (
    <Flex
      direction='column'
      gap={12}
      asChild>
      <nav style={style}>
        {headings.map((heading) => (
          <Typography
            key={heading.id + 'heading_content'}
            className='inline-block underline'
            variant='body-2-normal'
            color={style?.color ? 'inherit' : 'alternative'}>
            <a
              href={`#${heading.id}`}
              style={{
                paddingLeft: `${heading.depth * 12}px`
              }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(`#${heading.id}`)?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>
              {heading.text}
            </a>
          </Typography>
        ))}
      </nav>
    </Flex>
  )
}

export default TableOfContents
