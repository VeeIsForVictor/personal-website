import { Meta } from '$lib/models/meta.js';
import { parse } from 'valibot';

export async function load({ locals }) {
    const { directus, logger } = locals;

    const { meta: metaResult } = directus.query(`
        query {
            meta {
                title
                description
            }
        }
    `) as unknown as { meta: Meta };

    logger.trace(metaResult, 'requested meta');

    const meta = parse(Meta, metaResult);

    return {
        meta
    };
}