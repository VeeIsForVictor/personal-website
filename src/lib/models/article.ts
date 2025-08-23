import * as v from 'valibot';
import { BaseSchema } from './base';

export const Article = v.object({
    ...BaseSchema(
        v.pipe(
            v.string(),
            v.decimal(),
            v.transform(value => parseInt(value, 10)),
        ),
    ).entries,
    title: v.string(),
    slug: v.string(),
    summary: v.nullable(v.string()),
    status: v.picklist(['draft', 'published', 'archived']),
    content: v.optional(v.string()),
});

export const Articles = v.array(Article);

export type Article = v.InferOutput<typeof Article>;
export type Articles = v.InferOutput<typeof Articles>;
