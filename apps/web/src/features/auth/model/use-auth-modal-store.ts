import { create } from 'zustand'

type AuthModalState = {
  isLoginModalOpen: boolean
  setIsLoginModalOpen: (value: boolean) => void
  isSignupModalOpen: boolean
  setIsSignupModalOpen: (value: boolean) => void
}

export const useAuthModalStore = create<AuthModalState>((set) => ({
  isLoginModalOpen: false,
  setIsLoginModalOpen: (value: boolean) => set({ isLoginModalOpen: value }),
  isSignupModalOpen: false,
  setIsSignupModalOpen: (value: boolean) => set({ isSignupModalOpen: value })
}))
