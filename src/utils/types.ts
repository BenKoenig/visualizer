import { z } from 'zod'

/* Causes */
export const statsPrototype = z.object({
  value: z.number(),
  unit: z.string(),
  desc: z.string()
})
export type statsType = z.infer<typeof statsPrototype>

export const causePrototype = z.object({
  desc: z.string()
})
export type causeType = z.infer<typeof causePrototype>

export const factPrototype = z.object({
  desc: z.string()
})
export type factType = z.infer<typeof factPrototype>


/* Stages */
export const stagePrototype = z.object({
  name: z.string()
})

export type stageType = z.infer<typeof stagePrototype>
export interface buttonType {
  text: string
  onClick: any
}
