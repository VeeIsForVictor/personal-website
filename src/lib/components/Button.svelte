<script lang="ts">
    import { Button } from 'bits-ui';
    import type { Snippet } from 'svelte';

    interface Props {
        href?: string;
        children?: Snippet;
    }

    const { href, children }: Props = $props();
</script>

<Button.Root
    {href}
    class="bg-primary-50 rounded-xl px-4 py-2 text-sm text-black no-underline shadow-sm hover:cursor-pointer"
>
    {@render children?.()}
</Button.Root>
