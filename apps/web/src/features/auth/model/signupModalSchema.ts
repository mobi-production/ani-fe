import { z } from 'zod'

export const signupModalSchema = z.object({
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, '유효한 이메일 형식이 아닙니다'),
  nickname: z.string().min(2, '닉네임은 최소 2자 이상이어야 합니다'),
  password: z
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
    .regex(
      /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[a-z\d@$!%*?&]{8,}$/,
      '비밀번호는 최소 하나의 소문자, 숫자 및 특수문자를 포함해야 합니다'
    )
})

export type SignupModalFormData = z.infer<typeof signupModalSchema>
