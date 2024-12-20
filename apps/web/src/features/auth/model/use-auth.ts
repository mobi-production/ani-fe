'use client'

import { MutationFunction, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { UseMutationCustomOptions, UseQueryCustomOptions } from '@/shared/types/tanstack-query'
import { getRole, localLogin, oauthLogin, getAccessToken, signup } from '@/features/auth/api'
import { removeHeader, setHeader } from '@/shared/utils/set-header'
import { useEffect } from 'react'
import { AUTH_QUERY_KEYS } from '@/features/auth/config/auth-config'
import { NUMBERS, STORAGE_KEYS } from '@/shared/config/api'

type ResponseToken = {
  accessToken: string
  refreshToken: string
}

function useLogin<T>(
  loginApi: MutationFunction<ResponseToken, T>,
  mutationOptions?: UseMutationCustomOptions
) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: loginApi,
    onSuccess: ({ accessToken, refreshToken }) => {
      setHeader('Authorization', `Bearer ${accessToken}`)
      sessionStorage.setItem('refreshToken', refreshToken)
    },
    onSettled: () => {
      queryClient.refetchQueries({
        queryKey: [AUTH_QUERY_KEYS.AUTH, AUTH_QUERY_KEYS.GET_ACCESS_TOKEN]
      })

      queryClient.invalidateQueries({
        queryKey: [AUTH_QUERY_KEYS.AUTH, AUTH_QUERY_KEYS.ROLE]
      })
    },
    ...mutationOptions
  })
}

function useLocalLogin(mutationOptions?: UseMutationCustomOptions) {
  return useLogin(localLogin, mutationOptions)
}

function useDiscordLogin(mutationOptions?: UseMutationCustomOptions) {
  return useLogin(oauthLogin, mutationOptions)
}

function useGetRefreshToken() {
  const { data, isSuccess, isError, isPending } = useQuery({
    queryKey: [AUTH_QUERY_KEYS.AUTH, AUTH_QUERY_KEYS.GET_ACCESS_TOKEN],
    queryFn: getAccessToken,
    staleTime: NUMBERS.ACCESS_TOKEN_EXPIRATION,
    refetchInterval: NUMBERS.ACCESS_TOKEN_EXPIRATION,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true
  })

  useEffect(() => {
    if (isSuccess) {
      setHeader('Authorization', `Bearer ${data.accessToken}`)
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken)
    }
  }, [data, isSuccess])

  useEffect(() => {
    if (isError) {
      removeHeader('Authorization')
      localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN)
    }
  }, [isError])

  return { isSuccess, isError, isPending }
}

function useGetRole(queryOptions?: UseQueryCustomOptions) {
  const { data, isSuccess } = useQuery({
    queryKey: [AUTH_QUERY_KEYS.AUTH, AUTH_QUERY_KEYS.ROLE],
    queryFn: getRole,
    ...queryOptions
  })
  return { data, isSuccess }
}

function useSignUp() {
  const queryClient = useQueryClient()
  const { data, isSuccess } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [AUTH_QUERY_KEYS.AUTH, AUTH_QUERY_KEYS.ROLE]
      })
    }
  })

  return { data, isSuccess }
}

function useAuth() {
  const localLoginMutation = useLocalLogin()
  const discordLoginMutation = useDiscordLogin()
  const refreshTokenQuery = useGetRefreshToken()
  const getRoleQuery = useGetRole({
    enabled: refreshTokenQuery.isSuccess
  })
  const signUpMutation = useSignUp()

  const isLoggedIn = getRoleQuery.isSuccess

  return {
    isLoggedIn,
    getRoleQuery,
    refreshTokenQuery,
    localLoginMutation,
    discordLoginMutation,
    signUpMutation
  }
}

export default useAuth
