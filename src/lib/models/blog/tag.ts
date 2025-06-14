import { array, object, string, type InferOutput } from 'valibot';

export const Tag = object({
	tag_name: string()
});

export const Tags = array(Tag);

export type Tag = InferOutput<typeof Tag>;
export type Tags = InferOutput<typeof Tags>;
