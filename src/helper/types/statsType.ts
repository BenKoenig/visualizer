import { z } from 'zod';

export const StatsPrototype = z.object({ 
  value: z.string(),
  desc: z.string(),
});

export type statsType = z.infer<typeof StatsPrototype>;