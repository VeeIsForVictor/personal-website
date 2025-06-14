import { object, type InferOutput } from 'valibot';
import { BlogPosts } from './blog/blog_post';
import { Blog } from './blog';
import { Tags } from './blog/tag';
import { BlogPostsTags } from './blog/blog_posts_tags';
import { Skills } from './work/skills';
import { Projects } from './work/projects';
import { About } from './about/about';

export const Schema = object({
	blog: Blog,
	blog_posts: BlogPosts,
	blog_posts_tags: BlogPostsTags,
	tags: Tags,
	skills: Skills,
	projects: Projects,
	about: About
});

export type Schema = InferOutput<typeof Schema>;
