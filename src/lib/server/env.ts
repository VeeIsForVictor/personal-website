import assert from 'assert';
import { env } from '$env/dynamic/public';
import { building } from '$app/environment';

if (building) {

} else {
    assert(typeof env.PUBLIC_APIURL !== 'undefined', 'PUBLIC_APIURL is not defined');
}

export const { PUBLIC_APIURL } = env ?? '';