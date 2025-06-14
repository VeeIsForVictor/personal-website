import { type InferOutput, number, object } from 'valibot';
import { validateDateCreated, validateDateUpdated } from '$lib/model-utilities';

export const BaseCollection = object({
    id: number(),
    date_created: validateDateCreated,
    date_updated: validateDateUpdated,
});

export type BaseCollection = InferOutput<typeof BaseCollection>;
