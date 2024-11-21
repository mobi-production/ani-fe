import {
  BellOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
  FileOutlined,
  LeftOutlined,
  PlayCircleOutlined,
  RightOutlined,
  UserOutlined
} from '@ant-design/icons'

export const IconsMap = {
  RightOutlined: RightOutlined,
  LeftOutlined: LeftOutlined,
  UserOutlined: UserOutlined,
  BellOutlined: BellOutlined,
  ExclamationCircleOutlined: ExclamationCircleOutlined,
  FileOutlined: FileOutlined,
  PlayCircleOutlined: PlayCircleOutlined,
  CheckCircleFilled: CheckCircleFilled
} as const

export type IconVariantType = keyof typeof IconsMap
