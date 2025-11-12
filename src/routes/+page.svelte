<script lang="ts">
    import Hero from '$lib/components/home/Hero.svelte';

    const { data } = $props();
    const { homepageElements, promisedArticles } = $derived(data);
</script>

<div class="flex flex-col">
    {#each homepageElements as element}
        <div class="gap-2">
            {#if element.collection === 'HBlock_hero'}
                <Hero heroBlockData={element.item} />
            {/if}
        </div>
    {/each}
</div>