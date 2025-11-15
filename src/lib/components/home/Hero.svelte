<script lang="ts">
    import type { HBlockHero } from "$lib/models/homepage_elements";

    interface Props {
        heroBlockData: HBlockHero; 
    }

    const { heroBlockData }: Props = $props();
</script>

<div class="flex flex-row prose dark:prose-invert">
    <div class="flex flex-col">
        <h1>{heroBlockData.headline}</h1>
        <div>{@html heroBlockData.content}</div>
    </div>
    {#if heroBlockData.image !== null}
        <div>
            <img src={heroBlockData.image.id} alt={heroBlockData.image.description}>
        </div>
    {/if}
</div>