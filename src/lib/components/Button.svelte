<script lang="ts">
    import { Button } from "bits-ui";
    import type { Snippet } from "svelte";

    interface Props {
        href?: string
        children?: Snippet
    }

    const { href, children }: Props = $props();
</script>

<Button.Root {href} class="rounded-xl bg-primary-50 py-2 px-4 text-sm text-black no-underline shadow-sm hover:cursor-pointer">
    {@render children?.()}
</Button.Root>