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

<div class="flex w-full flex-col items-center">
    {#if group_type == 'articles'}
        {@const { articles: articleIds } = cardgroupData}
        {@const articles = promisedArticles.filter(({id}) => articleIds.includes({id})).map(({article}) => article)}
        {#each articles as article}
            {#await article}
                
            {:then article} 
                
            {/await}
        {/each}
    {/if}
</div>