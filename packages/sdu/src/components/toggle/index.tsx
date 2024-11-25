import { typographyMap } from '@repo/sdu/config/variants'
import { ColorStyle } from '@repo/sdu/types/common'
import { Flex } from '@repo/ui/server'
import { memo, useState } from 'react'

import SDUText, { TextProps } from '../text'

type Props = {
  variant?: keyof typeof typographyMap
  id?: string
  summary: TextProps[]
  style?: ColorStyle
}

function SDUToggle({
  id,
  variant = 'text',
  summary,
  style,
  children,
  ...props
}: Props & { children?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleToggle = (e: React.MouseEvent<HTMLDetailsElement>) => {
    e.preventDefault()

    setIsAnimating(true)
    setIsOpen(!isOpen)

    setTimeout(() => {
      setIsAnimating(false)
    }, 200)
  }

  return (
    <details
      id={id}
      style={style}
      className='group overflow-hidden'
      open={isOpen || isAnimating}>
      <summary
        className="flex cursor-pointer select-none items-center gap-1 marker:content-['']"
        onClick={handleToggle}
        {...props}>
        <Flex
          asChild
          justify='center'
          align='center'>
          <svg
            className='h-6 w-6 p-[0.37rem] transition-transform duration-200'
            style={{
              transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'
            }}
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'>
            <path
              d='M0.5 0.0664062L11.5 6.06641L0.5 12.0664V0.0664062Z'
              fill='#474747'
            />
          </svg>
        </Flex>
        <SDUText
          variant={typographyMap[variant]}
          tag='span'
          style={style}
          rich_text={summary}
        />
      </summary>
      <div
        className='ml-8 mt-1 origin-top transition-all duration-200'
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
          pointerEvents: isOpen ? 'auto' : 'none'
        }}>
        {children}
      </div>
    </details>
  )
}

export default memo(SDUToggle)
