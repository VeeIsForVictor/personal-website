import { assert } from '$lib/assert.js';
import { Article } from '$lib/models/article.js';
import { HBlockCardgroup, HomepageElementsData } from '$lib/models/homepage_elements.js';
import { array, parse, parseAsync } from 'valibot';

export async function load({ locals }) {
    const { directus, logger } = locals;
    const { home_homepage_elements: homepageResult } = await directus.query<HomepageElementsData[]>(`
        query {
            home_homepage_elements {
                id
                item {
                    ... on HBlock_hero {
                        id
                        date_updated
                        headline
                        content
                        buttons
                        image
                    }
                    ... on HBlock_cardgroup {
                        id
                        date_updated
                        headline
                        content
                        group_type
                        custom_cards
                        articles {
                            id
                        }
                    }
                }
                collection
            }
        }
    `) as unknown as { home_homepage_elements: HomepageElementsData[] };

    logger.trace({homepageResult}, 'elements fetch result');

    const homepageElements = parse(array(HomepageElementsData), homepageResult);

    logger.trace({homepageElements}, 'elements parsed')

    const articleIds = homepageElements.filter(
        (elem) => elem.collection == 'HBlock_cardgroup' && elem.item.group_type == 'articles'
    ).map(
        (articleGroup) => {
            assert(articleGroup.collection == 'HBlock_cardgroup' && articleGroup.item.group_type == 'articles')
            return articleGroup.item.articles.map(({ id }) => id);
        }
    ).flat()

    logger.trace({ articleIds });

    const promisedArticles = articleIds.map(
        async (id) => {
            const { articles: [articleResult, ..._rest] } = await directus.query(`
                query {
                    articles(filter: { id: { _eq: "${id}" } }) {
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
            `) as unknown as { articles: Article[] }
            return parse(Article, articleResult)
        }
    )

    return { homepageElements, promisedArticles }
}