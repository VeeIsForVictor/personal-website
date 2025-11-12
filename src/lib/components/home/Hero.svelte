<script lang="ts">
    import type { HBlockHero } from "$lib/models/homepage_elements";

    interface Props {
        heroBlockData: HBlockHero; 
    }

    const { heroBlockData }: Props = $props();
</script>