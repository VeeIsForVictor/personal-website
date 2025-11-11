import * as v from 'valibot';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function buildBaseSchema(idSchema: v.BaseSchema<any, any, v.BaseIssue<unknown>>) {
    return v.object({
        id: idSchema,
        date_created: v.optional(v.string()),
        date_updated: v.nullable(v.string()),
    });
}
