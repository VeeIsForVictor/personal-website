import { cleanHtml } from '$lib/model-utilities';
import { object, pick, pipe, string, type InferOutput } from 'valibot';
import { BaseCollection } from '../base';

export const Blog = object({
	...pick(BaseCollection, ["date_created", "date_updated"]).entries,
	headline: string(),
	subheadline: pipe(string(), cleanHtml),
	hero_background: string(),
});

export type Blog = InferOutput<typeof Blog>;
