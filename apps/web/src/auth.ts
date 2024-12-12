import NextAuth, { NextAuthResult } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { discordOauthSchema, loginModalSchema } from './entities/auth/model'
import { login } from './features/auth/api/login'

const nextAuthResult = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  useSecureCookies: process.env.NODE_ENV === 'production',
  cookies: {
    csrfToken: {
      name: 'next-auth.csrf-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production'
      }
    }
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
          const { accessToken, refreshToken } = await discordOauthSchema.parseAsync(credentials)

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

          const { accessToken, refreshToken } = response.data

          return {
            id: 'credentials-user',
            type: 'credentials',
            accessToken,
            refreshToken
          }
        } catch (error) {
          return null
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, account }) => {
      if (account?.type === 'oauth') {
        console.log(account, 'account')
        token.accessToken = account.accessToken as string
        token.refreshToken = account.refreshToken as string
      }
      return token
    },
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken as string
      session.refreshToken = token.refreshToken as string
      return session
    }
  }
})

export const auth: NextAuthResult['auth'] = nextAuthResult.auth
export const { handlers, signIn, signOut } = nextAuthResult
