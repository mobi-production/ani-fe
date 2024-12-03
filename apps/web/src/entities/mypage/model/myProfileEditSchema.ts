import { z } from 'zod'

export const myPageProfileEditSchema = z
  .object({
    nickname: z.string().min(1, '닉네임을 입력해주세요'),
    email: z.string(),
    password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다'),
    passwordConfirm: z.string()
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['passwordConfirm']
  })

export type MyPageProfileEditFormData = z.infer<typeof myPageProfileEditSchema>
