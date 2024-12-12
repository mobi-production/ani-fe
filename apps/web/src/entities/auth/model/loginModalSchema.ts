import { z } from 'zod'

export const loginModalSchema = z.object({
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, '유효한 이메일 형식이 아닙니다'),
  password: z.string().max(10, '비밀번호는 최대 10자 이하여야 합니다')
})

export type LoginModalFormData = z.infer<typeof loginModalSchema>
