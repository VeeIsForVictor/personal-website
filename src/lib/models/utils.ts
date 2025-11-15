import { PUBLIC_APIURL } from '$env/static/public';
import * as v from 'valibot';

export const imageIdToUrl = v.transform(
    (imageId: string) => `${PUBLIC_APIURL}/assets/${imageId}`
)