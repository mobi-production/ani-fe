import NextAuth, { NextAuthResult } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Discord from 'next-auth/providers/discord'
import { loginModalSchema } from './entities/auth/model'
import { login } from './features/auth/api/login'

const nextAuthResult = NextAuth({
  providers: [
    Discord,
    Credentials({
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
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
      }
      return token
    },
    async session({ session, token }) {
      if (typeof token.accessToken === 'string') {
        session.accessToken = token.accessToken
      }
      if (typeof token.refreshToken === 'string') {
        session.refreshToken = token.refreshToken
      }
      return session
    }
  }
})

export const auth: NextAuthResult['auth'] = nextAuthResult.auth
export const { handlers, signIn, signOut } = nextAuthResult
