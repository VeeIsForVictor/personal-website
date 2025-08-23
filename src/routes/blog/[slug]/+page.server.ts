import { Article } from '$lib/models/article';
import { parse } from 'valibot';

export async function load({ params, locals }) {
    const directus = locals.directus;
    const articleResult = await directus.query<Article>(`
        query {
            articles(filter: { slug: { _eq: "${params.slug}" } }) {
                id
                date_created
                date_updated
                title
                slug
                summary
                status
                content
            }
        }
    `);

    const article = parse(Article, articleResult.articles[0]);

    return {
        article,
    };
}
