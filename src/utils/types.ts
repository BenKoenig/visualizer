import { z } from 'zod'

/* Stats */
export const statsPrototype = z.object({
  value: z.string(),
  desc: z.string()
})

export type statsType = z.infer<typeof statsPrototype>

/* Stages */
export const stagePrototype = z.object({
  name: z.string()
})

export type stageType = z.infer<typeof stagePrototype>
export interface buttonType {
  text: string
  onClick: any
}
