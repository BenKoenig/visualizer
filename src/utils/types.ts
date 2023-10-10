import { z } from 'zod'

/* Stats */
export const statsPrototype = z.object({
  value: z.number(),
  unit: z.string(),
  desc: z.string(),
  svg: z.string()
})
export type statsType = z.infer<typeof statsPrototype>

/* Causes */
export const causePrototype = z.object({
  desc: z.string()
})
export type causeType = z.infer<typeof causePrototype>

/* Donation */
export const donationPrototype = z.object({
  link: z.string(),
  org: z.string()
})
export type donationType = z.infer<typeof donationPrototype>

/* Facts */
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
