<script lang="ts">
    import type { Article } from "$lib/models/article";
    import type { HBlockCardgroup } from "$lib/models/homepage_elements";
    import Icon from '@iconify/svelte';
    import { Skeleton } from 'flowbite-svelte';

    interface Props {
        cardgroupData: HBlockCardgroup;
        promisedArticles: {id: number, article: Promise<Article>}[]
    }

    const { cardgroupData, promisedArticles }: Props = $props();
    const { group_type, headline, content } = cardgroupData;
</script>

<div class="flex flex-col w-full items-center">
    <div class="flex flex-col items-center prose dark:prose-invert prose-h1:mb-2">
        <h1>{headline}</h1>
        <div>{@html content}</div>
    </div>
    <div class="grid grid-flow-col gap-4 min-w-1/3 items-center content-center justify-items-stretch">
        {#if group_type == 'articles'}
            {@const { articles } = cardgroupData}
            {@const articleIds = articles.map(({ id }) => id)}
            {@const articleData = promisedArticles.filter(({id}) => articleIds.includes(id)).map(({article}) => article)}
            {#each articleData as article}
                <div class="grid grid-cols-1 divide-y divide-primary-700 bg-primary-800 rounded-2xl border border-primary-600 text-primary-50 h-64 w-48 hover:shadow-lg hover:bg-primary-700 transition duration-150 ease-in-out justify-self-center">
                    {#await article}
                        <div>
                            <Skeleton size="md" class="p-4" />
                        </div>
                    {:then article}
                        {@const {title, slug, summary} = article}
                        <a class="group flex flex-col size-full p-4 prose dark:prose-invert prose-sm" href="/blog/{slug}">
                            <h3 class="group-hover:underline">{title}</h3>
                            <p>{summary}</p>
                        </a>
                    {/await}
                </div>
            {/each}
        {/if}
    </div>
</div>