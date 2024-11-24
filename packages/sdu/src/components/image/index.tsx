type Props = {
  url: string
  alt: string
  width?: number
  height?: number
}

function SDUImage({ url, alt, width, height }: Props) {
  const isNotHeightAndWidth = !width || !height

  return (
    <img
      src={url}
      alt={alt}
      width={width}
      height={height}
      style={isNotHeightAndWidth ? { width: '100%', aspectRatio: '4 / 3' } : undefined}
    />
  )
}

export default SDUImage
