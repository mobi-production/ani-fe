import cn from '@repo/util/cn'
import { ComponentPropsWithoutRef } from 'react'

function Divider({ ...props }: ComponentPropsWithoutRef<'div'>) {
  const { className, ...rest } = props
  return (
    <div
      className={cn('h-[1px] w-full bg-line-normal', className)}
      {...rest}
    />
  )
}

export default Divider
