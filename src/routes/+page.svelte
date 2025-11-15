<script lang="ts">
    import Hero from '$lib/components/home/Hero.svelte';

    const { data } = $props();
    const { homepageElements, promisedArticles } = $derived(data);
</script>

<div class="flex flex-col gap-4">
    {#each homepageElements as element}
        <div>
            {#if element.collection === 'HBlock_hero'}
                <Hero heroBlockData={element.item} />
            {/if}
        </div>
    {/each}
</div>