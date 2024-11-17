import { ComponentPropsWithoutRef } from 'react'

function RadioBtn({ ...props }: ComponentPropsWithoutRef<'input'>) {
  return (
    <input
      type='radio'
      className='h-[1.125rem] w-[1.125rem] appearance-none rounded-full border-[1.5px] border-line-normal bg-transparent duration-200 checked:border-[4px] checked:border-white checked:bg-primary-normal checked:shadow-[0_0_0_1px_#00BD9A]'
      {...props}
    />
  )
}

export default RadioBtn
