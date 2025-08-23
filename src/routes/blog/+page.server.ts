import { Articles, type Article } from '$lib/models/article';
import { parse } from 'valibot';

export async function load({ locals }) {
    const directus = locals.directus;
    const articlesResult = await directus.query<Article[]>(`
        query {
            articles(filter: { status: { _eq: "published" } }) {
                id
                date_created
                date_updated
                title
                slug
                summary
                status
            }
        }    
    `);

    const articles = parse(Articles, articlesResult.articles);
    return {
        articles,
    };
}
