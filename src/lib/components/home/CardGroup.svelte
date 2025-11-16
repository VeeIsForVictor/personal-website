<script lang="ts">
    import type { Article } from "$lib/models/article";
    import type { HBlockCardgroup } from "$lib/models/homepage_elements";

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
    <div class="grid grid-cols-3 gap-4">
        {#if group_type == 'articles'}
            {@const { articles } = cardgroupData}
            {@const articleIds = articles.map(({ id }) => id)}
            {@const articleData = promisedArticles.filter(({id}) => articleIds.includes(id)).map(({article}) => article)}
            {@debug promisedArticles, articleIds, articles}
            {#each articleData as article}
                <div class="bg-primary-50">
                    {#await article}
                        
                    {:then article}
                        
                    {/await}
                </div>
            {/each}
        {/if}
    </div>
</div>