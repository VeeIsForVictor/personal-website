import { nullable, object, pick, pipe, string, type InferOutput } from "valibot";
import { BaseCollection } from "../base";
import { cleanHtml, compileMarkdown } from "$lib/model-utilities";

export const About = object({
    ...pick(BaseCollection, ['id']).entries,
    about_text: nullable(pipe(string(), compileMarkdown, cleanHtml))
});

export type About = InferOutput<typeof About>;