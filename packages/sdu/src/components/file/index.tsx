import { ColorStyle } from '@repo/sdu/types/common'
import Icon from '@repo/ui/components/icon'
import { Flex, Typography } from '@repo/ui/server'
import { getFileIcon } from '@repo/util/get-file-icon'

type Props = {
  id?: string
  url: string
  file_size: number
  style?: ColorStyle
}

function getFileName(url: string) {
  return url.split('/').pop()
}

function SDUFile({ id, url, file_size, style }: Props) {
  const fileName = getFileName(url)
  const icon = getFileIcon(url)

  return (
    <Flex
      gap={8}
      align='center'
      justify='center'
      asChild>
      <a
        id={id}
        href={url}
        download={fileName}
        style={style}>
        <Icon
          name={icon}
          size={20}
        />
        <Flex
          gap={4}
          align='center'>
          <Typography
            variant='body-1-normal'
            fontWeight='medium'
            color='inherit'
            style={style}>
            {fileName}
          </Typography>
          <Typography
            variant='caption-2'
            color='alternative'>
            {file_size}
          </Typography>
        </Flex>
      </a>
    </Flex>
  )
}

export default SDUFile
