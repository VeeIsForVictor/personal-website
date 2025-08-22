<script lang="ts">
    import toast, { Toaster } from 'svelte-french-toast';
    import { Button } from 'bits-ui';

    const { data } = $props();
    const { articles } = $derived(data);
</script>

<div class="grid grid-cols-3 gap-6">
    {#each articles as article (article.id)}
        <!-- This div acts as a "card" -->
        <div
            class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
            <h2 class="mb-2 text-xl font-semibold text-gray-900">
                {article.title}
            </h2>
            <p class="mb-4 text-sm text-gray-500">
                Published on: {new Date(article.date_created).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </p>
            <p class="mb-4 text-gray-700">
                <!-- Placeholder for a future excerpt field -->
                Article summary or excerpt will go here.
            </p>
            <Button.Root onclick={() => toast.success(`Navigating to Article ${article.id}`)}>
                Read More
            </Button.Root>
        </div>
    {/each}
</div>

<Toaster />
