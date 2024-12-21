import { AUTH_END_POINT } from '@/features/auth/config/auth-config'
import { signupSchema } from '@/entities/auth/model'
import { createSession } from '@/shared/libs/session'

type LoginResponseData = {
  accessToken: string
  refreshToken: string
}

export async function localSignup(_: unknown, formData: FormData) {
  const baseURL = `${process.env.NEXT_PUBLIC_AUTH_URL}${AUTH_END_POINT.LOCAL_SIGNUP}`

  const result = signupSchema.safeParse(Object.fromEntries(formData))

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  const res = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...result.data,
      type: 'ani'
    })
  })

  const data = (await res.json()) as LoginResponseData

  await createSession(data)
}
