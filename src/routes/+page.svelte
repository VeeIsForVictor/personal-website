<script lang="ts">
    import Hero from '$lib/components/home/Hero.svelte';

    const { data } = $props();
    const { homepageElements, promisedArticles } = $derived(data);
</script>

<div class="flex flex-col items-center gap-4">
    {#each homepageElements as element, idx}
        {#if idx == 0}
            <div class="w-screen bg-linear-to-b from-primary-950 to-primary-900">
                <div class="w-5/6 mx-auto">
                    {#if element.collection === 'HBlock_hero'}
                        <Hero heroBlockData={element.item} />
                    {/if}
                </div>
            </div>
        {:else}
            <div class="w-5/6">
                {#if element.collection === 'HBlock_hero'}
                    <Hero heroBlockData={element.item} />
                {/if}
            </div>
        {/if}
    {/each}
</div>