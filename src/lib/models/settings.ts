import { type InferOutput, hexColor, nullable, object, pipe, string, url } from 'valibot';
import { assetURL } from '$lib/model-utilities';

export const Settings = object({
    project_name: string(),
    project_url: pipe(string(), url()),
    project_logo: pipe(string(), assetURL),
    project_color: pipe(string(), hexColor()),
    public_favicon: pipe(string(), assetURL),
    public_foreground: nullable(pipe(string(), assetURL)),
    public_background: nullable(pipe(string(), assetURL)),
});

export type Settings = InferOutput<typeof Settings>;
