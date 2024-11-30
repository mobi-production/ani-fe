import cn from '@repo/sdu/libs/cn'
import { ColorStyle } from '@repo/sdu/types/common'
import { Icon } from '@repo/ui/client'
import { Flex } from '@repo/ui/server'
import { PropsWithChildren, useState } from 'react'

import SDUText, { TextProps } from '../text'

type Props = {
  id?: string
  rich_text: TextProps[]
  checked: boolean
  style?: ColorStyle
}

function SDUCheckbox({ id, rich_text, checked, style, children }: PropsWithChildren<Props>) {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <Flex
      id={id}
      gap={4}
      direction='column'
      style={style}>
      <Flex
        gap={8}
        align='start'>
        <label
          htmlFor='checkbox'
          className='cursor-pointer pt-2'
          onClick={() => setIsChecked(!isChecked)}>
          <input
            id='checkbox'
            type='checkbox'
            className='hidden'
            checked={isChecked}
          />
          <Flex
            align='center'
            justify='center'
            asChild>
            <div
              className={cn(
                'box-border h-3 w-3 rounded-[2px] border p-1 text-white',
                isChecked ? 'border-primary-normal bg-primary-normal' : 'border-label-neutral'
              )}>
              {isChecked && (
                <Icon
                  name='CheckOutlined'
                  size={8}
                />
              )}
            </div>
          </Flex>
        </label>
        <SDUText
          variant='body-1-normal'
          boldFontWeight='semibold'
          defaultFontWeight='medium'
          rich_text={rich_text}
          tag='p'
          style={{
            color: isChecked ? '#8A8A8A' : '#171717',
            textDecoration: isChecked ? 'line-through' : 'none'
          }}
        />
      </Flex>
      {children && <div className='pl-5'>{children}</div>}
    </Flex>
  )
}

export default SDUCheckbox
