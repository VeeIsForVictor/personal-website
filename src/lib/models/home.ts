import * as v from 'valibot';

export const Home = v.object({
    id: v.number(),
    date_updated: v.nullable(v.string())
});

export type Home = v.InferOutput<typeof Home>;