import { type InferOutput, object, pick, pipe, string } from 'valibot';
import { BaseCollection } from '../base';
import { cleanHtml } from '$lib/model-utilities';

export const Blog = object({
    ...pick(BaseCollection, ['date_created', 'date_updated']).entries,
    headline: string(),
    subheadline: pipe(string(), cleanHtml),
    hero_background: string(),
});

export type Blog = InferOutput<typeof Blog>;
