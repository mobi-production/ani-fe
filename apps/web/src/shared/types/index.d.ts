import { ReactNode } from 'react'

declare global {
  type PropsNeedChildren<P = unknown> = P & { children: ReactNode }

  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_AUTH_URL: string
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_CLIENT_URL: string
      AUTH_SECRET: string
    }
  }
}

declare module 'next-auth' {
  interface Session {
    accessToken?: string
    refreshToken?: string
    user: {
      accessToken?: string
      refreshToken?: string
    } & DefaultSession['user']
  }

  interface User {
    accessToken?: string
    refreshToken?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string
    refreshToken?: string
  }
}

declare module 'axios' {
  interface AxiosRequestConfig {
    tokenRequired?: boolean
  }
}
