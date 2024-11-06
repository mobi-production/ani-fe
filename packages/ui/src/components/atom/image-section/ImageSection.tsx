import { cva, VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import { ComponentPropsWithoutRef, ElementType } from 'react'

export const imageSectionVariants = cva('', {
  variants: {
    size: {
      xxs: 'w-[5rem] h-[5rem]',
      xs: 'w-[7.5rem] h-[7.5rem]',
      s: 'w-[12.5rem] h-[9.375rem]',
      m: 'w-[18.75rem] h-[14rem]',
      l: 'w-[25rem] h-[18.75rem]'
    },
    fit: {
      cover: 'object-cover',
      contain: 'object-contain',
      fill: 'object-fill',
      none: 'object-none',
      scaleDown: 'object-scale-down'
    }
  },
  compoundVariants: [
    { size: 'xxs', class: 'rounded-[0.3125rem]' },
    { size: 'xs', class: 'rounded-[0.3125rem]' },
    { size: 's', class: 'rounded-[0.375rem]' },
    { size: 'm', class: 'rounded-md' },
    { size: 'l', class: 'rounded-[0.667rem]' }
  ],
  defaultVariants: {
    size: 'm',
    fit: 'cover'
  }
})

type ImageSectionProps = VariantProps<typeof imageSectionVariants> &
  ComponentPropsWithoutRef<'div'> & {
    src: string
    alt: string
    component?: ElementType
  }

function ImageSection({
  component = 'div',
  size,
  fit = 'cover',
  src,
  alt,
  className = '',
  ...props
}: ImageSectionProps) {
  const Component = component

  return (
    <Component
      className={`${imageSectionVariants({ size })}`}
      {...props}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        style={{ width: '100%', height: '100%' }}
        className={`${imageSectionVariants({ fit })}`}
      />
    </Component>
  )
}

export default ImageSection
