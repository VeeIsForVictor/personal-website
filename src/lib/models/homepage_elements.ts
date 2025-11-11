import * as v from 'valibot';
import { buildBaseSchema } from './base';

const HBlockBase = v.object({
    ...buildBaseSchema(
        v.pipe(
            v.string(),
            v.uuid()
        )
    ).entries,
    headline: v.nullable(v.string()),
    content: v.nullable(v.string()),
})

export const HBlockHero = v.object({
    ...HBlockBase.entries,
    buttons: v.array(
        v.object({
            label: v.string(),
            href: v.string()
        })
    ),
    image: v.nullable(v.pipe(v.string(), v.uuid()))
})

export type HBlockHero = v.InferOutput<typeof HBlockHero>;

export const HBlockCardgroup = v.variant('group_type', [
    v.object({
        ...HBlockBase.entries,
        group_type: v.literal('articles'),
        articles: v.nullable(v.array(v.number()))
    }),
    v.object({
        ...HBlockBase.entries,
        group_type: v.literal('custom'),
        custom_cards: v.null() // to change once the custom schema gets defined
    })
])

export type HBlockCardgroup = v.InferOutput<typeof HBlockCardgroup>;

export const HomepageElementsData = v.object({
    id: v.number(),
    item: v.string(),
    collection: v.picklist(['HBlock_hero', 'HBlock_cardgroup'])
})

export type HomepageElementsData = v.InferOutput<typeof HomepageElementsData>;