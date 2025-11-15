import * as v from 'valibot';
import { buildBaseSchema } from './base';
import { Image } from './image';

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
    buttons: v.nullable(v.array(
        v.object({
            label: v.string(),
            href: v.string()
        }))
    ),
    image: v.nullable(Image)
})

export type HBlockHero = v.InferOutput<typeof HBlockHero>;

export const HBlockCardgroup = v.variant('group_type', [
    v.object({
        ...HBlockBase.entries,
        group_type: v.literal('articles'),
        articles: v.array(v.object({ id: v.pipe(
                    v.string(),
                    v.decimal(),
                    v.transform(value => parseInt(value, 10)),
                ), }))
    }),
    v.object({
        ...HBlockBase.entries,
        group_type: v.literal('custom'),
        custom_cards: v.null() // to change once the custom schema gets defined
    })
])

export type HBlockCardgroup = v.InferOutput<typeof HBlockCardgroup>;

export const HomepageElementsData = v.variant('collection', [
    v.object({
        collection: v.literal('HBlock_hero'),
        item: HBlockHero,
    }),
    v.object({
        collection: v.literal('HBlock_cardgroup'),
        item: HBlockCardgroup,
    })
])

export type HomepageElementsData = v.InferOutput<typeof HomepageElementsData>;