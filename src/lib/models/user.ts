import { type InferOutput, array, object, pipe, string, uuid } from 'valibot';

export const User = object({
    first_name: string(),
    last_name: string(),
    id: pipe(string(), uuid()),
});

export const Users = array(User);

export type User = InferOutput<typeof User>;
export type Users = InferOutput<typeof Users>;
