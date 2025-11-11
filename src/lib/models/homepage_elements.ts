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