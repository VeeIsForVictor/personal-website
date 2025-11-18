// See https://svelte.dev/docs/kit/types#app.d.ts

import type { DirectusClient, GraphqlClient } from '@directus/sdk';
import type { Logger } from 'pino';
import type { Schema } from '$lib/models/schema';
import type { PostHog } from 'posthog-node';

// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            logger: Logger;
            directus: DirectusClient<Schema> & GraphqlClient<Schema>;
            posthog: PostHog;
        }
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

export {};
