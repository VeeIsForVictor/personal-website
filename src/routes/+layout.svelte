<script lang="ts">
    import '../app.css';
    import Background from '$lib/components/Background.svelte';

    const { children } = $props();
</script>

<Background />

{@render children()}
