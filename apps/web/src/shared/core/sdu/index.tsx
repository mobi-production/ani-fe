import { Divider, Flex } from '@repo/ui/server'
import FullScreenLayout from '@/shared/ui/layout/full-screen-layout'
import PathTitleBanner from '@/widgets/path/ui/path-title-banner'
import PathInformationBanner from '@/widgets/path/ui/path-information-banner'
import PathRecommendBanner from '@/widgets/path/ui/path-recommend-banner'
import PathCurriculum from '@/widgets/path/ui/path-curriculum'
import PathNavigationLinks from '@/widgets/path/ui/path-navigation-links'
import { ComponentProps } from 'react'

type ComponentPropsMap = {
  Flex: ComponentProps<typeof Flex>
  Divider: ComponentProps<typeof Divider>
  PathInformationBanner: ComponentProps<typeof PathInformationBanner>
  PathRecommendBanner: ComponentProps<typeof PathRecommendBanner>
  PathCurriculum: ComponentProps<typeof PathCurriculum>
  FullScreenLayout: ComponentProps<typeof FullScreenLayout>
  PathTitleBanner: ComponentProps<typeof PathTitleBanner>
  PathNavigationLinks: ComponentProps<typeof PathNavigationLinks>
}

export type ServerDrivenComponentType =
  | { type: 'Flex'; props: ComponentPropsMap['Flex']; content?: ServerDrivenComponentType[] }
  | { type: 'Divider'; props: ComponentPropsMap['Divider']; content?: never }
  | {
      type: 'FullScreenLayout'
      props?: never
      content?: ServerDrivenComponentType[]
    }
  | { type: 'PathTitleBanner'; props: ComponentPropsMap['PathTitleBanner']; content?: never }
  | {
      type: 'PathInformationBanner'
      props: ComponentPropsMap['PathInformationBanner']
      content?: never
    }
  | {
      type: 'PathRecommendBanner'
      props: ComponentPropsMap['PathRecommendBanner']
      content?: never
    }
  | {
      type: 'PathCurriculum'
      props: ComponentPropsMap['PathCurriculum']
      content?: never
    }
  | {
      type: 'PathNavigationLinks'
      props: ComponentPropsMap['PathNavigationLinks']
      content?: never
    }

export function ServerDrivenComponent({ data }: { data: ServerDrivenComponentType }) {
  const { type, props, content } = data

  switch (type) {
    case 'Flex':
      return (
        <Flex {...props}>{content?.map((child) => ServerDrivenComponent({ data: child }))}</Flex>
      )

    case 'Divider':
      return <Divider {...props} />

    case 'FullScreenLayout':
      return (
        <FullScreenLayout>
          {content?.map((child) => ServerDrivenComponent({ data: child }))}
        </FullScreenLayout>
      )

    case 'PathTitleBanner':
      return <PathTitleBanner {...props} />

    case 'PathInformationBanner':
      return <PathInformationBanner {...props} />

    case 'PathRecommendBanner':
      return <PathRecommendBanner {...props} />

    case 'PathCurriculum':
      return <PathCurriculum {...props} />

    case 'PathNavigationLinks':
      return <PathNavigationLinks {...props} />

    default:
      console.warn(`Unknown component type: ${type}`)
      return null
  }
}
