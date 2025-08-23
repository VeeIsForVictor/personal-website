<script lang="ts">
    import { Button } from 'bits-ui';

    const { data } = $props();
    const { articles } = $derived(data);
</script>

<div class="grid grid-cols-3 gap-6">
    {#each articles as article (article.id)}
        <!-- This div acts as a "card" -->
        <a
            href="/blog/{article.slug}"
            class="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
            <h2 class="text-xl font-semibold text-gray-900 group-hover:underline">
                {article.title}
            </h2>
            <p class="mb-4 text-sm text-gray-500">
                Published on: {new Date(article.date_created).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </p>
            {#if article.summary === null}
                <p class="mb-4 text-sm text-gray-500 italic">- No summary provided -</p>
            {:else}
                <p class="mb-4 text-sm text-gray-900">
                    {article.summary}
                </p>
            {/if}
            <Button.Root class="group-hover:underline">Read More</Button.Root>
        </a>
    {/each}
</div>
