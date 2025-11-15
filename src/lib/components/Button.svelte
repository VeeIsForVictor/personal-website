<script lang="ts">
    import { Button } from "bits-ui";
    import type { Snippet } from "svelte";

    interface Props {
        href?: string
        children?: Snippet
    }

    const { href, children }: Props = $props();
</script>

<Button.Root {href}>
    {@render children?.()}
</Button.Root>