<script lang="ts">
    import Hero from '$lib/components/home/Hero.svelte';

    const { data } = $props();
    const { homepageElements, promisedArticles } = $derived(data);
</script>

<div class="flex grow flex-col items-center gap-4">
    {#each homepageElements as element, idx}
        {#if idx == 0}
            <div class="from-primary-950 to-primary-900 w-screen bg-linear-to-b pt-12">
                <div class="mx-auto flex w-5/6">
                    {#if element.collection === 'HBlock_hero'}
                        <Hero heroBlockData={element.item} />
                    {/if}
                </div>
            </div>
        {:else}
            <div class="mx-auto flex w-5/6 last:pb-12">
                {#if element.collection === 'HBlock_hero'}
                    <Hero heroBlockData={element.item} />
                {/if}
            </div>
        {/if}
    {/each}
</div>
