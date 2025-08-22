// See https://svelte.dev/docs/kit/types#app.d.ts

import type { DirectusClient } from '@directus/sdk';
import type { Logger } from 'pino';

// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            logger: Logger;
            directus: DirectusClient;
        }
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

export {};
