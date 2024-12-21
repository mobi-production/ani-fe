import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Session = {
  accessToken: string
  refreshToken: string
}

type AuthState = {
  session: Session | null
  isLoggedIn: boolean
  isLoading: boolean
  setSession: (session: Session | null) => void
  clearSession: () => void
  syncSession: () => Promise<void>
}

export const authStore = create<AuthState>()(
  persist(
    (set) => ({
      session: null,
      isLoggedIn: false,
      isLoading: false,
      setSession: (session) =>
        set({
          session,
          isLoggedIn: !!session,
          isLoading: false
        }),
      clearSession: () =>
        set({
          session: null,
          isLoggedIn: false,
          isLoading: false
        }),
      syncSession: async () => {
        try {
          const response = await fetch('/api/v1/auth/session')
          const responseData = await response.json()

          if (responseData.session) {
            set({
              session: responseData.session,
              isLoggedIn: true,
              isLoading: false
            })
          } else {
            set({
              session: null,
              isLoggedIn: false,
              isLoading: false
            })
          }
        } catch (error) {
          set({
            session: null,
            isLoggedIn: false,
            isLoading: false
          })
        }
      }
    }),
    {
      name: 'auth-storage'
    }
  )
)
