import * as v from 'valibot';

export const BaseSchema = (idSchema: v.BaseSchema<any, any, v.BaseIssue<unknown>>) => {
    return v.object({
        id: idSchema,
        created_at: v.string(),
        updated_at: v.string(),
    });
};
