import cn from '@repo/util/cn'
import styles from './Logo.styles.module.css'
import Link from 'next/link'

function Logo() {
  return (
    <Link
      className={cn(
        styles.logo,
        'min-w-[101px] text-[2.25rem] leading-[2.25rem] text-label-normal'
      )}
      aria-label='Home'
      href={'/'}>
      *A-NI
    </Link>
  )
}

export default Logo
