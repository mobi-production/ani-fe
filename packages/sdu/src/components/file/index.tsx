import Icon from '@repo/ui/components/icon'
import { Flex, Typography } from '@repo/ui/server'
import { getFileIcon } from '@repo/util/get-file-icon'

type Props = {
  url: string
  file_size: number
  expiry_time: Date
}

function getFileName(url: string) {
  return url.split('/').pop()
}

function SDUFile({ url, expiry_time, file_size }: Props) {
  const isExpired = new Date(expiry_time) < new Date()
  const fileName = getFileName(url)
  const icon = getFileIcon(url)

  return (
    <Flex
      gap={8}
      align='center'
      justify='center'
      asChild>
      <a
        href={url}
        download={fileName}
        color={isExpired ? '#808080' : '#171717'}>
        <Icon
          name={icon}
          size={20}
        />
        <Flex
          gap={4}
          align='center'>
          <Typography
            variant='body-1-normal'
            fontWeight='medium'>
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
