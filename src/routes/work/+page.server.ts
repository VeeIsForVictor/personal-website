import { Projects } from '$lib/models/project';
import { parse } from 'valibot';

export async function load({ locals }) {
    const directus = locals.directus;
    const projectsResult = await directus.query<Projects>(`
        query {
            projects(filter: { status: { _eq: "published" } }) {
                id
                date_created
                date_updated
                title
                slug
                status
                project_url
                summary
            }
        }    
    `);

    const projects = parse(Projects, projectsResult.projects);
    return {
        projects,
    };
}
