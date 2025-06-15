<script lang="ts">
    import Background from '$lib/components/Background.svelte';
    import '../app.css';

    const { children } = $props();
</script>

<Background />

{@render children()}
