<script lang="ts">
    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';
    import NavBar from '$lib/components/NavBar.svelte';

    const { children } = $props();
</script>

<div class="flex h-screen w-dvw flex-col items-center bg-primary-900 dark:text-white">
    <NavBar />

    <main class="flex h-full flex-col items-center justify-center max-w-6xl min-w-2xl px-4 mx-4 rounded-lg shadow-lg overflow-auto">
        {@render children()}
    </main>

    <Footer />
</div>
