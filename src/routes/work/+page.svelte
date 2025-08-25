<script lang="ts">
    import { Button } from 'bits-ui';

    const { data } = $props();
    const { projects } = $derived(data);
</script>

<div class="flex flex-col gap-6 max-w-4xl">
    {#each projects as project (project.id)}
        <!-- This div acts as a "card" -->
        <a
            href="/work/{project.slug}"
            class="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
            <h2 class="text-xl font-semibold text-gray-900 group-hover:underline">
                {project.title}
            </h2>
            <p class="mb-4 text-sm text-gray-500">
                Published on: {new Date(project.date_created).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </p>
            {#if project.summary === null}
                <p class="mb-4 text-sm text-gray-500 italic">- No summary provided -</p>
            {:else}
                <p class="mb-4 text-sm text-gray-900">
                    {@html project.summary}
                </p>
            {/if}
            <Button.Root class="group-hover:underline">Read More</Button.Root>
        </a>
    {/each}
</div>
