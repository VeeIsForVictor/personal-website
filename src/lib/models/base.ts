import { validateDateCreated, validateDateUpdated } from "$lib/model-utilities";
import { number, object, type InferOutput } from "valibot";

export const BaseCollection = object({
    id: number(),
	date_created: validateDateCreated,
	date_updated: validateDateUpdated,
});

export type BaseCollection = InferOutput<typeof BaseCollection>;