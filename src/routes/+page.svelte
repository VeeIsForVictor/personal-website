<script lang="ts">
    import CardGroup from '$lib/components/home/CardGroup.svelte';
    import Hero from '$lib/components/home/Hero.svelte';

    const { data } = $props();
    const { homepageElements, promisedArticles } = $derived(data);
</script>

<div class="flex grow flex-col items-center gap-4">
    {#each homepageElements as element, idx}
        {@const { collection, item } = element}
        {#if idx == 0}
            <div
                class="from-primary-950 to-primary-900 flex h-[calc(100vh-56px)] w-screen grow flex-col items-center bg-linear-to-b lg:h-auto lg:pt-12"
            >
                <div class="my-auto flex w-5/6 self-center">
                    {#if collection === 'HBlock_hero'}
                        <Hero heroBlockData={item} />
                    {:else if collection === 'HBlock_cardgroup'}
                        <CardGroup cardgroupData={item} {promisedArticles} />
                    {/if}
                </div>
            </div>
        {:else}
            <div class="mx-auto flex w-5/6 last:pb-12">
                {#if collection === 'HBlock_hero'}
                    <Hero heroBlockData={item} />
                {:else if collection === 'HBlock_cardgroup'}
                    <CardGroup cardgroupData={item} {promisedArticles} />
                {/if}
            </div>
        {/if}
    {/each}
</div>
