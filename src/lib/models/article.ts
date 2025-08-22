import * as v from 'valibot';
import { BaseSchema } from './base';

export const Article = v.object({
    ...BaseSchema(v.number()).entries,
    title: v.string(),
    status: v.picklist(['draft', 'published', 'archived']),
    content: v.string(),
});

export type Article = v.InferOutput<typeof Article>;
