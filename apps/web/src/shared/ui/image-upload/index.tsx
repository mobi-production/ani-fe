import cn from '@repo/util/cn'
import Image from 'next/image'
import { ChangeEvent, ComponentProps, createContext, useContext, useRef, useState } from 'react'

type ImageUploadContextType = {
  image: string | null
  setImage: (img: string | null) => void
  triggerFileSelect: () => void
}

const ImageUploadContext = createContext<ImageUploadContextType | null>(null)

type ImageUploadProps = ComponentProps<'div'> & {
  onImageSelect?: (image: string | null) => void
}

function ImageUpload({ children, onImageSelect, ...props }: ImageUploadProps) {
  const [image, setImage] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setImage(result)
        if (onImageSelect) {
          onImageSelect(result)
        }
      }
      reader.readAsDataURL(file)
    } else {
      if (onImageSelect) {
        onImageSelect(null)
      }
    }
  }

  const triggerFileSelect = () => {
    inputRef.current?.click()
  }

  return (
    <ImageUploadContext.Provider value={{ image, setImage, triggerFileSelect }}>
      <div {...props}>
        {children}
        <input
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          style={{ display: 'none' }}
          ref={inputRef}
        />
      </div>
    </ImageUploadContext.Provider>
  )
}

type TriggerProps = ComponentProps<'button'> & {
  children: React.ReactNode
}

function Trigger({ children, ...props }: TriggerProps) {
  const context = useContext(ImageUploadContext)
  if (!context) {
    throw new Error('ImageUploadContext 내에서 사용해야 합니다.')
  }

  return (
    <button
      type='button'
      onClick={context.triggerFileSelect}
      {...props}>
      {children}
    </button>
  )
}

interface PreviewTriggerProps extends ComponentProps<'button'> {
  asTrigger: true
  size?: number
  placeholder?: string
}

interface PreviewDivProps extends ComponentProps<'div'> {
  asTrigger?: false
  size?: number
  placeholder?: string
}

type PreviewProps = PreviewTriggerProps | PreviewDivProps

function Preview({
  className,
  size = 7.5,
  placeholder = '/avif/placeholder.avif',
  asTrigger = false,
  ...props
}: PreviewProps) {
  const context = useContext(ImageUploadContext)
  if (!context) {
    throw new Error('ImageUploadContext 내에서 사용해야 합니다.')
  }

  const handleClick = () => {
    if (asTrigger) {
      context.triggerFileSelect()
    }
  }

  if (asTrigger) {
    return (
      <button
        type='button'
        onClick={handleClick}
        className={cn('relative h-[7.5rem] w-[7.5rem] overflow-hidden rounded-full', className)}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        <Image
          src={context.image ? context.image : placeholder}
          alt='프로필 이미지'
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          sizes={`${size}rem`}
        />
      </button>
    )
  }

  return (
    <div
      onClick={handleClick}
      className={cn('relative h-[7.5rem] w-[7.5rem] overflow-hidden rounded-full', className)}
      {...(props as React.HTMLAttributes<HTMLDivElement>)}>
      <Image
        src={context.image ? context.image : placeholder}
        alt='프로필 이미지'
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
        sizes={`${size}rem`}
      />
    </div>
  )
}

ImageUpload.Trigger = Trigger
ImageUpload.Preview = Preview

export default ImageUpload
