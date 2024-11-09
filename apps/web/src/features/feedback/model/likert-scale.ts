import { z } from 'zod'

const LikertScaleSchema = z.union([z.number().int().min(1).max(5), z.undefined()])

export type LikertScaleType = z.infer<typeof LikertScaleSchema>
