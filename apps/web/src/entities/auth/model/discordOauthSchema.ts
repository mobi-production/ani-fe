import { z } from 'zod'

export const discordOauthSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string()
})

export type DiscordOauthSchema = z.infer<typeof discordOauthSchema>
