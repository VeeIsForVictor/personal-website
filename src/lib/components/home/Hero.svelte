<script lang="ts">
    import type { HBlockHero } from "$lib/models/homepage_elements";
    import Button from "../Button.svelte";

    interface Props {
        heroBlockData: HBlockHero; 
    }

    const { heroBlockData }: Props = $props();
    const { buttons, image } = $derived(heroBlockData);
</script>

<div class="flex flex-col lg:flex-row-reverse prose dark:prose-invert w-full">
    {#if image !== null}
        <div class="w-1/4 m-auto overflow-clip">
            <img 
                class="aspect-square"
                src={image.id} 
                alt={image.description}
            >
        </div>
    {/if}
    <div class="flex flex-col">
        <h1>{heroBlockData.headline}</h1>
        <div>{@html heroBlockData.content}</div>
        {#if buttons !== null && buttons.length > 0}
            <div>
                {#each buttons as {label, href}}
                    <Button {href}>
                        {label}
                    </Button>
                {/each}
            </div>
        {/if}
    </div>
</div>