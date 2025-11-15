<script lang="ts">
    import type { HBlockHero } from "$lib/models/homepage_elements";
    import Button from "../Button.svelte";

    interface Props {
        heroBlockData: HBlockHero; 
    }

    const { heroBlockData }: Props = $props();
    const { buttons, image } = $derived(heroBlockData);
</script>

<div class="flex flex-col lg:flex-row-reverse w-full my-4">
    {#if image !== null}
        <div class="w-1/3 mx-auto overflow-visible transform translate-y-8 z-10">
            <img
                class="aspect-square rounded-2xl shadow-sm w-full h-auto object-cover border border-primary-800"
                src={image.id}
                alt={image.description}
            />
        </div>
    {/if}
    <div class="flex flex-col p-6 pb-8 pt-10 border border-primary-800 rounded-2xl prose dark:prose-invert prose-h1:mb-0">
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