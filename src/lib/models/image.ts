import * as v from 'valibot';
import { imageIdToUrl } from './utils';

export const Image = v.object({
    id: v.pipe(v.string(), v.uuid(), imageIdToUrl),
    description: v.string()
})

export type Image = v.InferOutput<typeof Image>;