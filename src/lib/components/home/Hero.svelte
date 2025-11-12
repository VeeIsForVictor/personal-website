<script lang="ts">
    import type { HBlockHero } from "$lib/models/homepage_elements";

    interface Props {
        heroBlockData: HBlockHero; 
    }

    const { heroBlockData }: Props = $props();
</script>

<div class="flex flex-row prose dark:prose-invert">
    <h1>{heroBlockData.headline}</h1>
</div>