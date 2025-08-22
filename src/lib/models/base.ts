import * as v from 'valibot';

export const BaseSchema = (idSchema: v.BaseSchema<any, any, v.BaseIssue<unknown>>) => {
    return v.object({
        id: idSchema,
        date_created: v.string(),
        date_updated: v.nullable(v.string()),
    });
};
