import {
  AppRouterContext,
  type AppRouterInstance
} from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { FC } from 'react'

export function wrapWithAppRouterContext(Story: FC) {
  return (
    <AppRouterContext.Provider value={{} as AppRouterInstance}>
      <Story />
    </AppRouterContext.Provider>
  )
}
