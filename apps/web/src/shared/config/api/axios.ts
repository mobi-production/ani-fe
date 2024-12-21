import { authStore } from '@/features/auth/model/auth-store'
import { getSession } from '@/shared/libs/session'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true
})

axiosInstance.interceptors.request.use(async (config) => {
  const isServer = typeof window === 'undefined'

  let token = null

  if (isServer) {
    const sessionPayload = await getSession()
    if (sessionPayload) {
      token = {
        accessToken: sessionPayload.accessToken,
        refreshToken: sessionPayload.refreshToken
      }
    }
  } else {
    token = authStore.getState().session
  }

  if (config.tokenRequired && !token) {
    throw new Error('Unauthorized')
  }

  if (token?.accessToken) {
    config.headers.Authorization = `Bearer ${token.accessToken}`
  }

  return config
})
