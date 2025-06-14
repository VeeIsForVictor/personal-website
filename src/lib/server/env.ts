import assert from "assert";
import { env } from "$env/dynamic/private";

assert(typeof env.PUBLIC_APIURL !== 'undefined');
export const { PUBLIC_APIURL } = env