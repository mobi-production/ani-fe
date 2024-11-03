import { cn } from "@repo/util"

type ButtonProps = {
  className?: string
}

function Button({ className }: ButtonProps) {
  return (
    <div className='flex items-center justify-center bg-blue-600'>
      <button className={cn('text-red-400 text-t1 text-sm text-t3', className)}>Button</button>
    </div>
  )
}

export default Button
