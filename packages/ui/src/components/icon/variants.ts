import {
  BellOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
  FileOutlined,
  InfoCircleOutlined,
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
  CheckCircleFilled: CheckCircleFilled,
  InfoCircleOutlined: InfoCircleOutlined
} as const

export type IconVariantType = keyof typeof IconsMap

export const IconsSizes = {
  '1': '4',
  '2': '8',
  '3': '12',
  '4': '16',
  '5': '20',
  '6': '24',
  '7': '28',
  '8': '32',
  '9': '36',
  '10': '40',
  '11': '44',
  '12': '48',
  '16': '64'
} as const

export type IconSizesType = keyof typeof IconsSizes
