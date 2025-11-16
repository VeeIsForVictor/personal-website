import { PUBLIC_APIURL } from '$lib/server/env';
import * as v from 'valibot';

export const imageIdToUrl = v.transform((imageId: string) => `${PUBLIC_APIURL}/assets/${imageId}`);
