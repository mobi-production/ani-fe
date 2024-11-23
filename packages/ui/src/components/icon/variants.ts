import {
  AudioOutlined,
  BellOutlined,
  CheckCircleFilled,
  CloseOutlined,
  CodeOutlined,
  DownOutlined,
  ExclamationCircleOutlined,
  FileExcelOutlined,
  FileImageOutlined,
  FileOutlined,
  FilePdfOutlined,
  FilePptOutlined,
  FileTextOutlined,
  FileWordOutlined,
  FileZipOutlined,
  Html5Outlined,
  InfoCircleOutlined,
  LeftOutlined,
  PlayCircleOutlined,
  QuestionCircleOutlined,
  RightOutlined,
  UserOutlined,
  VideoCameraOutlined
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
  CloseOutlined: CloseOutlined,
  InfoCircleOutlined: InfoCircleOutlined,
  QuestionCircleOutlined: QuestionCircleOutlined,
  FileImageOutlined: FileImageOutlined,
  FilePdfOutlined: FilePdfOutlined,
  VideoCameraOutlined: VideoCameraOutlined,
  AudioOutlined: AudioOutlined,
  FileTextOutlined: FileTextOutlined,
  FileZipOutlined: FileZipOutlined,
  FileExcelOutlined: FileExcelOutlined,
  FilePptOutlined: FilePptOutlined,
  FileWordOutlined: FileWordOutlined,
  Html5Outlined: Html5Outlined,
  CodeOutlined: CodeOutlined
} as const

export type IconVariantType = keyof typeof IconsMap
