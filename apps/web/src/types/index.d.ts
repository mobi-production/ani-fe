import { ReactNode } from 'react'

declare global {
  type PropsNeedChildren<P = unknown> = P & { children: ReactNode }
}
