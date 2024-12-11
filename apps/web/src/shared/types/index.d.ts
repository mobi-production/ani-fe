import { ReactNode } from 'react'

declare global {
  type PropsNeedChildren<P = unknown> = P & { children: ReactNode }

  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_AUTH_URL: string
      NEXT_PUBLIC_API_URL: string
    }
  }
}

declare module 'next-auth' {
  interface User {
    accessToken: string
    refreshToken: string
  }

  interface Session extends DefaultSession {
    accessToken: string
    refreshToken: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string
    refreshToken: string
  }
}
