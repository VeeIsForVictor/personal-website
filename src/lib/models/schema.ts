import { type InferOutput, object } from 'valibot';
import { About } from './about/about';
import { Blog } from './blog';
import { BlogPosts } from './blog/blog_post';
import { BlogPostsTags } from './blog/blog_posts_tags';
import { Projects } from './work/projects';
import { Skills } from './work/skills';
import { Tags } from './blog/tag';

export const Schema = object({
    blog: Blog,
    blog_posts: BlogPosts,
    blog_posts_tags: BlogPostsTags,
    tags: Tags,
    skills: Skills,
    projects: Projects,
    about: About,
});

export type Schema = InferOutput<typeof Schema>;
