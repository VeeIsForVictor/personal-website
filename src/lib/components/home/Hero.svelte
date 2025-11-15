<script lang="ts">
    import type { HBlockHero } from "$lib/models/homepage_elements";
    import Button from "../Button.svelte";

    interface Props {
        heroBlockData: HBlockHero; 
    }

    const { heroBlockData }: Props = $props();
    const { buttons, image } = $derived(heroBlockData);
</script>

<div class="flex flex-col lg:flex-row-reverse items-center lg:gap-12 w-full">
    {#if image !== null}
        <div class="w-1/4 mx-auto overflow-visible transform translate-y-7 lg:translate-y-0 z-10">
            <img
                class="aspect-square rounded-2xl shadow-sm w-full h-auto object-cover border border-primary-800"
                src={image.id}
                alt={image.description}
            />
        </div>
    {/if}
    <div class="flex flex-col grow p-8 pb-8 pt-10 border lg:border-0 border-primary-800 bg-primary-900 lg:bg-transparent rounded-2xl prose dark:prose-invert prose-h1:mb-0 prose-h1:mt-0 md:max-w-full">
        <h1>{heroBlockData.headline}</h1>
        <div>{@html heroBlockData.content}</div>
        {#if buttons !== null && buttons.length > 0}
            <div class="flex gap-2">
                {#each buttons as {label, href}}
                    <Button {href}>
                        {label}
                    </Button>
                {/each}
            </div>
        {/if}
    </div>
</div>