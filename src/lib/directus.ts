import { createDirectus, graphql } from '@directus/sdk';
import { PUBLIC_APIURL } from '$lib/server/env';
import type { Schema } from '$lib/models/schema';
import { ofetch } from 'ofetch';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDirectusInstance() {
    const directus = createDirectus<Schema>(PUBLIC_APIURL, { globals: { fetch: ofetch } }).with(
        graphql(),
    );
    return directus;
}

export default getDirectusInstance;
