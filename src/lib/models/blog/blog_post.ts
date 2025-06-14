import { cleanHtml, compileMarkdown } from '$lib/model-utilities';
import { object, pipe, string, uuid, array, type InferOutput, nullable } from 'valibot';
import { BaseCollection } from '../base';

export const BlogPost = object({
	...BaseCollection.entries,
	title: string(),
	author: nullable(pipe(string(), uuid())),
	slug: string(),
	post_content: nullable(pipe(string(), compileMarkdown, cleanHtml))
});

export const BlogPosts = array(BlogPost);

export type BlogPost = InferOutput<typeof BlogPost>;
export type BlogPosts = InferOutput<typeof BlogPosts>;