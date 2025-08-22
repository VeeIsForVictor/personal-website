import assert from 'assert';
import { env } from '$env/dynamic/public';

assert(typeof env.PUBLIC_APIURL !== 'undefined', 'PUBLIC_APIURL is not defined');
export const { PUBLIC_APIURL } = env;
