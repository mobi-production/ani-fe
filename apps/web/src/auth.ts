import NextAuth, { NextAuthResult } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Discord from 'next-auth/providers/discord'

const nextAuthResult = NextAuth({
  providers: [
    Discord,
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        let user = null
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/v1/auth/login`, {
            method: 'POST',
            body: JSON.stringify(credentials)
          })
          const data = await response.json()
          user = data
        } catch (error) {
          console.error(error)
        }
        return user
      }
    })
  ]
})

export const auth: NextAuthResult['auth'] = nextAuthResult.auth
export const { handlers, signIn, signOut } = nextAuthResult
