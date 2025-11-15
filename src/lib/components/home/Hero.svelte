<script lang="ts">
    import type { HBlockHero } from '$lib/models/homepage_elements';
    import Button from '../Button.svelte';

    interface Props {
        heroBlockData: HBlockHero;
    }

    const { heroBlockData }: Props = $props();
    const { buttons, image } = $derived(heroBlockData);
</script>

<div class="flex w-full flex-col items-center lg:flex-row-reverse lg:gap-12">
    {#if image !== null}
        <div class="z-10 mx-auto w-1/4 translate-y-7 transform overflow-visible lg:translate-y-0">
            <img
                class="border-primary-800 aspect-square h-auto w-full rounded-2xl border object-cover shadow-sm lg:h-48 lg:w-auto"
                src={image.id}
                alt={image.description}
            />
        </div>
    {/if}
    <div
        class="border-primary-800 bg-primary-900 prose dark:prose-invert prose-h1:mb-0 prose-h1:mt-0 flex grow flex-col rounded-2xl border p-8 pt-10 pb-8 md:max-w-full lg:border-0 lg:bg-transparent"
    >
        <h1>{heroBlockData.headline}</h1>
        <div>{@html heroBlockData.content}</div>
        {#if buttons !== null && buttons.length > 0}
            <div class="flex gap-2">
                {#each buttons as { label, href }}
                    <Button {href}>
                        {label}
                    </Button>
                {/each}
            </div>
        {/if}
    </div>
</div>
