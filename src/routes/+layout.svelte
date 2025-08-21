<script lang="ts">
    import '../app.css';
    import NavBar from '$lib/components/NavBar.svelte';

    const { children } = $props();
</script>

<div class="w-dvw flex flex-col items-center h-screen">
    <NavBar />

    <main class="flex flex-col items-center justify-center h-full">
        {@render children()}
    </main>
</div>

