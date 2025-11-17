import * as v from 'valibot';

export const Meta = v.object({
    title: v.string(),
    description: v.string()
})

export type Meta = v.InferOutput<typeof Meta>;