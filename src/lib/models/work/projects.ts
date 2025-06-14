import { array, isoDate, object, optional, pipe, string, url, type InferOutput } from "valibot";
import { BaseCollection } from "../base";
import { cleanHtml, compileMarkdown } from "$lib/model-utilities";
import { Skills } from "./skills";

export const Project = object({
    ...BaseCollection.entries,
    name: string(),
    project_date: pipe(string(), isoDate()),
    repository_link: pipe(string(), url()),
    description: pipe(string(), compileMarkdown, cleanHtml),
	skills: optional(Skills)
});

export const Projects = array(Project);

export type Project = InferOutput<typeof Project>;
export type Projects = InferOutput<typeof Projects>;