import { cva, VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import { ImageFits, ImageSizes } from './variants'

export const imageSectionVariants = cva('', {
  variants: {
    size: {
      [ImageSizes.XXS]: 'w-[5rem] h-[5rem]',
      [ImageSizes.XS]: 'w-[7.5rem] h-[7.5rem]',
      [ImageSizes.S]: 'w-[12.5rem] h-[9.375rem]',
      [ImageSizes.M]: 'w-[18.75rem] h-[14rem]',
      [ImageSizes.L]: 'w-[25rem] h-[18.75rem]'
    },
    fit: {
      [ImageFits.COVER]: 'object-cover',
      [ImageFits.CONTAIN]: 'object-contain',
      [ImageFits.FILL]: 'object-fill',
      [ImageFits.NONE]: 'object-none',
      [ImageFits.SCALE_DOWN]: 'object-scale-down'
    }
  },
  compoundVariants: [
    { size: [ImageSizes.XXS], class: 'rounded-[0.3125rem]' },
    { size: [ImageSizes.XS], class: 'rounded-[0.3125rem]' },
    { size: [ImageSizes.S], class: 'rounded-[0.375rem]' },
    { size: [ImageSizes.M], class: 'rounded-md' },
    { size: [ImageSizes.L], class: 'rounded-[0.667rem]' }
  ],
  defaultVariants: {
    size: ImageSizes.M,
    fit: ImageFits.COVER
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
  fit,
  src,
  alt,
  className = '',
  ...props
}: ImageSectionProps) {
  const Component = component

  return (
    <Component
      className={`${imageSectionVariants({ size })} relative ${className}`}
      {...props}>
      <Image
        src={src}
        alt={alt}
        fill
        className={imageSectionVariants({ fit })}
      />
    </Component>
  )
}

export default ImageSection
