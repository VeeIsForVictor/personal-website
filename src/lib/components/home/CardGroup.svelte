<script lang="ts">
    import type { Article } from '$lib/models/article';
    import type { HBlockCardgroup } from '$lib/models/homepage_elements';
    import Icon from '@iconify/svelte';
    import { Skeleton } from 'flowbite-svelte';

    interface Props {
        cardgroupData: HBlockCardgroup;
        promisedArticles: { id: number; article: Promise<Article> }[];
    }

    const { cardgroupData, promisedArticles }: Props = $props();
    const { group_type, headline, content } = cardgroupData;
</script>

<div class="flex w-full flex-col items-center">
    <div class="prose dark:prose-invert prose-h1:mb-2 flex flex-col items-center">
        <h1>{headline}</h1>
        <div>{@html content}</div>
    </div>
    <div
        class="grid min-w-1/3 grid-cols-1 lg:grid-flow-col content-center items-center justify-items-stretch gap-4"
    >
        {#if group_type == 'articles'}
            {@const { articles } = cardgroupData}
            {@const articleIds = articles.map(({ id }) => id)}
            {@const articleData = promisedArticles
                .filter(({ id }) => articleIds.includes(id))
                .map(({ article }) => article)}
            {#each articleData as article}
                <div
                    class="divide-primary-700 bg-primary-800 border-primary-600 text-primary-50 hover:bg-primary-700 grid h-24 lg:h-64 w-full lg:w-48 grid-cols-1 divide-y justify-self-center rounded-2xl border transition duration-150 ease-in-out hover:shadow-lg"
                >
                    {#await article}
                        <div>
                            <Skeleton size="md" class="p-4" />
                        </div>
                    {:then article}
                        {@const { title, slug, summary } = article}
                        <a
                            class="group prose dark:prose-invert prose-sm flex size-full flex-col p-4"
                            href="/blog/{slug}"
                        >
                            <h3 class="group-hover:underline">{title}</h3>
                            <p>{summary}</p>
                        </a>
                    {/await}
                </div>
            {/each}
        {/if}
    </div>
</div>
