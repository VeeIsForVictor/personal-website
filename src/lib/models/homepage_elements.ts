import * as v from 'valibot';
import { buildBaseSchema } from './base';

export const hBlockBase = v.object({
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

export const cardGroupType = v.picklist(['articles', 'custom'])

export const hBlockCardgroup = v.object({
    ...hBlockBase.entries,
    group_type: cardGroupType,
    articles: v.optional(v.array(v.number()))
})