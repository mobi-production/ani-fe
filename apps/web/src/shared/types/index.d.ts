import { ReactNode } from 'react'

declare global {
  type PropsNeedChildren<P = unknown> = P & { children: ReactNode }

  namespace NodeJS {
    interface ProcessEnv {
      ANI_WEB_AUTH_URL: string
      ANI_WEB_API_URL: string
    }
  }
}
