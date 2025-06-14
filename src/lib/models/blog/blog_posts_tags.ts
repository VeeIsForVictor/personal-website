import { array, number, object, string, type InferOutput } from "valibot";

export const BlogPostTag = object({
    blog_posts_id: number(),
    tags_tag_name: string(),
})

export const BlogPostsTags = array(BlogPostTag)

export type BlogPostTag = InferOutput<typeof BlogPostTag>
export type BlogPostsTags = InferOutput<typeof BlogPostsTags>