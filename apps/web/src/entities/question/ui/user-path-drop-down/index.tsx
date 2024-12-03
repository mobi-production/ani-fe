import { myPageData } from '@/__mock__/data/mypage'
import DropdownMenu from '@/shared/ui/dropdown-menu'
import { Icon } from '@repo/ui/client'
import { Flex, Typography } from '@repo/ui/server'
import { useMemo } from 'react'

type Props = {
  currentPathName: string
  handleSelectPathName: (value: string) => void
}

function UserPathDropdown({ currentPathName, handleSelectPathName }: Props) {
  // @Todo: 사용자의 패스 목록 조회하는 로직 추가
  const pathNameList = [
    ...myPageData.inProgressPathList.map((path) => ({
      id: path.id.toString(),
      title: path.pathName
    })),
    ...myPageData.completedPathList.map((path) => ({
      id: path.id.toString(),
      title: path.pathName
    }))
  ]

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger>
        <Flex
          gap={4}
          direction='row'
          align='center'>
          <Typography variant={'caption-1'}>{currentPathName}</Typography>
          <Icon
            size={12}
            name='DownOutlined'
          />
        </Flex>
      </DropdownMenu.Trigger>
      <DropdownMenu.MenuContent triggerHeight='1.563rem'>
        {pathNameList.map((path) => (
          <DropdownMenu.MenuItem
            value={path.title}
            key={path.id}
            onValueSelect={handleSelectPathName}>
            <Typography variant={'caption-1'}>{path.title}</Typography>
          </DropdownMenu.MenuItem>
        ))}
      </DropdownMenu.MenuContent>
    </DropdownMenu>
  )
}

export default UserPathDropdown
