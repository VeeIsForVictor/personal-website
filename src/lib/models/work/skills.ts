import { object, string, array, type InferOutput, picklist } from 'valibot';
import { BaseCollection } from '../base';
import { imageUrlSchema } from '$lib/model-utilities';

export const Skill = object({
    ...BaseCollection.entries,
	visibility: picklist(['visible', 'hidden']),
    name: string(),
    icon: imageUrlSchema,
    type: picklist(['language', 'framework', 'technology'])
});

export const Skills = array(Skill);

export type Skill = InferOutput<typeof Skill>;
export type Skills = InferOutput<typeof Skills>;
