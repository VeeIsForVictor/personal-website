import { createDirectus, rest } from '@directus/sdk';
import { PUBLIC_APIURL } from '$lib/server/env';
import type { Schema } from '$lib/models/schema';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDirectusInstance(fetch: any) {
    const options = fetch ? { globals: { fetch } } : {};
    const directus = createDirectus<Schema>(PUBLIC_APIURL, options).with(rest());
    return directus;
}

export default getDirectusInstance;
