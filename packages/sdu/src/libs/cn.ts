import clsx from 'clsx'
import { ClassNameValue, twMerge } from 'tailwind-merge'

function cn(...inputs: ClassNameValue[]) {
  return twMerge(clsx(inputs))
}

export default cn
