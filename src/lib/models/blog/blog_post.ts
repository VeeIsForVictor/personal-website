import { type InferOutput, array, nullable, object, pipe, string, uuid } from 'valibot';
import { cleanHtml, compileMarkdown } from '$lib/model-utilities';
import { BaseCollection } from '../base';

export const BlogPost = object({
    ...BaseCollection.entries,
    title: string(),
    author: nullable(pipe(string(), uuid())),
    slug: string(),
    post_content: nullable(pipe(string(), compileMarkdown, cleanHtml)),
});

export const BlogPosts = array(BlogPost);

export type BlogPost = InferOutput<typeof BlogPost>;
export type BlogPosts = InferOutput<typeof BlogPosts>;
