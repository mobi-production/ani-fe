const iconMap = {
  image: 'FileImageOutlined',
  pdf: 'FilePdfOutlined',
  video: 'VideoCameraOutlined',
  audio: 'AudioOutlined',
  document: 'FileOutlined',
  text: 'FileTextOutlined',
  zip: 'FileZipOutlined',
  excel: 'FileExcelOutlined',
  powerpoint: 'FilePptOutlined',
  word: 'FileWordOutlined',
  html: 'Html5Outlined',
  code: 'CodeOutlined'
} as const

export function getFileIcon(url: string) {
  const isImage =
    url.endsWith('.avif') ||
    url.endsWith('.webp') ||
    url.endsWith('.png') ||
    url.endsWith('.jpg') ||
    url.endsWith('.jpeg')
  const isPdf = url.endsWith('.pdf')
  const isVideo = url.endsWith('.mp4')
  const isAudio = url.endsWith('.mp3') || url.endsWith('.wav') || url.endsWith('.ogg')
  const isText = url.endsWith('.txt') || url.endsWith('.md')
  const isZip = url.endsWith('.zip')
  const isHtml = url.endsWith('.html')
  const isCode =
    url.endsWith('.js') || url.endsWith('.css') || url.endsWith('.ts') || url.endsWith('.tsx')

  if (isImage) return iconMap.image
  if (isPdf) return iconMap.pdf
  if (isVideo) return iconMap.video
  if (isAudio) return iconMap.audio
  if (isHtml) return iconMap.html
  if (isCode) return iconMap.code
  if (isZip) return iconMap.zip
  if (isText) return iconMap.text

  return iconMap.document
}
