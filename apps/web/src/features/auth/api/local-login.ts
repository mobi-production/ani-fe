import { loginSchema } from '@/entities/auth/model'
import { AUTH_END_POINT } from '@/features/auth/config/auth-config'
import { createSession } from '@/shared/libs/session'

type LoginResponseData = {
  data: {
    accessToken: string
    refreshToken: string
  }
  status: number
}

export async function localLogin(_: unknown, formData: FormData) {
  const baseURL = `${process.env.NEXT_PUBLIC_AUTH_URL}${AUTH_END_POINT.LOCAL_LOGIN}`

  const result = loginSchema.safeParse(Object.fromEntries(formData))

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  try {
    const res = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        ...result.data,
        type: 'ani'
      })
    })

    if (!res.ok) {
      throw new Error('Login failed')
    }

    const data = (await res.json()) as LoginResponseData
    await createSession(data.data)

    return { success: true }
  } catch (error) {
    return {
      errors: {
        email: ['로그인에 실패했습니다.']
      }
    }
  }
}
