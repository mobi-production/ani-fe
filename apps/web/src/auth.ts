import NextAuth, { NextAuthResult } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { loginModalSchema, tokenSchema } from './entities/auth/model'
import { login } from './features/auth/api/login'

const nextAuthResult = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  useSecureCookies: process.env.NODE_ENV === 'production',
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  },
  providers: [
    Credentials({
      id: 'discord',
      credentials: {
        accessToken: { label: 'Access Token', type: 'text' },
        refreshToken: { label: 'Refresh Token', type: 'text' }
      },
      authorize: async (credentials) => {
        try {
          const { accessToken, refreshToken } = await tokenSchema.parseAsync(credentials)

          return {
            id: 'discord-user',
            type: 'oauth',
            accessToken,
            refreshToken
          }
        } catch (error) {
          return null
        }
      }
    }),
    Credentials({
      id: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await loginModalSchema.parseAsync(credentials)

          const response = await login({ email, password })

          if (!response) return null

          const { accessToken, refreshToken } = await tokenSchema.parseAsync(response.data)

          return {
            id: 'credentials-user',
            type: 'credentials',
            accessToken,
            refreshToken
          }
        } catch (error) {
          if (error instanceof Error) {
            console.error('로그인 상세 에러:', {
              name: error.name,
              message: error.message,
              stack: error.stack
            })
          }
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.type === 'oauth') {
        token.accessToken = account.accessToken
        token.refreshToken = account.refreshToken
      }
      return token
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      session.refreshToken = token.refreshToken as string
      return session
    }
  },
  debug: process.env.NODE_ENV === 'development'
})

export const auth: NextAuthResult['auth'] = nextAuthResult.auth
export const { handlers, signIn, signOut } = nextAuthResult
