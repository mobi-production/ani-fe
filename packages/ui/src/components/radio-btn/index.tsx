import { ComponentPropsWithoutRef } from 'react'

function RadioBtn({ ...props }: ComponentPropsWithoutRef<'input'>) {
  return (
    <input
      type='radio'
      className='h-[1.125rem] w-[1.125rem] appearance-none rounded-full border-[1.5px] border-[#000000/10] bg-transparent duration-200 checked:border-[4px] checked:border-white checked:bg-black checked:shadow-[0_0_0_1px_black]'
      {...props}
    />
  )
}

export default RadioBtn
