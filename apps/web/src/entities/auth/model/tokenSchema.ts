import { z } from 'zod'

export const tokenSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string()
})

export type TokenSchema = z.infer<typeof tokenSchema>
