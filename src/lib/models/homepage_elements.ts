import * as v from 'valibot';
import { buildBaseSchema } from './base';

const hBlockBase = v.object({
    ...buildBaseSchema(
        v.pipe(
            v.string(),
            v.uuid()
        )
    ).entries,
    headline: v.nullable(v.string()),
    content: v.nullable(v.string()),
})

export const hBlockHero = v.object({
    ...hBlockBase.entries,
    buttons: v.array(
        v.object({
            label: v.string(),
            href: v.string()
        })
    ),
    image: v.nullable(v.pipe(v.string(), v.uuid()))
})

export type hBlockHero = v.InferOutput<typeof hBlockHero>;

export const hBlockCardgroup = v.variant('group_type', [
    v.object({
        ...hBlockBase.entries,
        group_type: v.literal('articles'),
        articles: v.nullable(v.array(v.number()))
    }),
    v.object({
        ...hBlockBase.entries,
        group_type: v.literal('custom'),
        custom_cards: v.null() // to change once the custom schema gets defined
    })
])

export type hBlockCardgroup = v.InferOutput<typeof hBlockCardgroup>;