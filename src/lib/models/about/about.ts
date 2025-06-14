import { type InferOutput, nullable, object, pick, pipe, string } from 'valibot';
import { cleanHtml, compileMarkdown } from '$lib/model-utilities';
import { BaseCollection } from '../base';

export const About = object({
    ...pick(BaseCollection, ['id']).entries,
    about_text: nullable(pipe(string(), compileMarkdown, cleanHtml)),
});

export type About = InferOutput<typeof About>;
