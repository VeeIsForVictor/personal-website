import * as v from 'valibot';
import { BaseSchema } from './base';

export const Project = v.object({
    ...BaseSchema(
        v.pipe(
            v.string(),
            v.decimal(),
            v.transform(value => parseInt(value, 10)),
        ),
    ).entries,
    title: v.string(),
    status: v.picklist(['draft', 'published', 'archived']),
    slug: v.string(),
    project_url: v.nullable(v.pipe(v.string(), v.url())),
    summary: v.nullable(v.string()),
});

export const Projects = v.array(Project);

export type Project = v.InferOutput<typeof Project>;
export type Projects = v.InferOutput<typeof Projects>;
