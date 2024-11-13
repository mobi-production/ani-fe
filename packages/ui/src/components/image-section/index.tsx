import { ComponentPropsWithoutRef, useMemo } from 'react'

import { ImageFits, ImageSizes } from './variants'

type ImageSectionProps = ComponentPropsWithoutRef<'img'> & {
  src: string
  alt: string
  size?: (typeof ImageSizes)[keyof typeof ImageSizes]
  fit?: (typeof ImageFits)[keyof typeof ImageFits]
}

const sizeClasses = {
  [ImageSizes.XXS]: { width: '5rem', height: '5rem', className: 'rounded-[0.3125rem]' },
  [ImageSizes.XS]: { width: '7.5rem', height: '7.5rem', className: 'rounded-[0.3125rem]' },
  [ImageSizes.S]: { width: '12.5rem', height: '9.375rem', className: 'rounded-[0.375rem]' },
  [ImageSizes.M]: { width: '18.75rem', height: '14rem', className: 'rounded-md' },
  [ImageSizes.L]: { width: '25rem', height: '18.75rem', className: 'rounded-[0.667rem]' }
}

const fitClasses = {
  [ImageFits.COVER]: 'object-cover',
  [ImageFits.CONTAIN]: 'object-contain',
  [ImageFits.FILL]: 'object-fill',
  [ImageFits.NONE]: 'object-none',
  [ImageFits.SCALE_DOWN]: 'object-scale-down'
}

function ImageSection({
  src,
  alt,
  size = 'm',
  fit = 'cover',
  className = '',
  ...props
}: ImageSectionProps) {
  const { width, height, sizeClassName, fitClassName } = useMemo(() => {
    const sizeClass = sizeClasses[size] || sizeClasses['m']
    const fitClass = fitClasses[fit] || fitClasses['cover']
    return {
      width: sizeClass.width,
      height: sizeClass.height,
      sizeClassName: sizeClass.className,
      fitClassName: fitClass
    }
  }, [size, fit])

  return (
    <img
      src={src}
      alt={alt}
      loading='lazy'
      style={{ width, height }}
      className={`flex-shrink-0 ${sizeClassName} ${fitClassName} ${className}`}
      {...props}
    />
  )
}

export default ImageSection
