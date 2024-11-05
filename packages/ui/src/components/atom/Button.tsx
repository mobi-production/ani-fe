import { cn } from '@repo/util'

type ButtonProps = {
  className?: string
}

function Button({ className }: ButtonProps) {
  return (
    <div className='flex items-center justify-center bg-blue-600'>
      <button className={cn('text-sm text-t1 text-t3 text-red-400', className)}>Button</button>
    </div>
  )
}

export default Button
