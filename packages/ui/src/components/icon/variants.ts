import {
  BellOutlined,
  CheckCircleFilled,
  DownOutlined,
  ExclamationCircleOutlined,
  FileOutlined,
  InfoCircleOutlined,
  LeftOutlined,
  PlayCircleOutlined,
  QuestionCircleOutlined,
  RightOutlined,
  UserOutlined
} from '@ant-design/icons'

export const IconsMap = {
  RightOutlined: RightOutlined,
  LeftOutlined: LeftOutlined,
  DownOutlined: DownOutlined,
  UserOutlined: UserOutlined,
  BellOutlined: BellOutlined,
  ExclamationCircleOutlined: ExclamationCircleOutlined,
  FileOutlined: FileOutlined,
  PlayCircleOutlined: PlayCircleOutlined,
  CheckCircleFilled: CheckCircleFilled,
  InfoCircleOutlined: InfoCircleOutlined,
  QuestionCircleOutlined: QuestionCircleOutlined
} as const

export type IconVariantType = keyof typeof IconsMap
