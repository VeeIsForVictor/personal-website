<script lang="ts">
    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';
    import NavBar from '$lib/components/NavBar.svelte';

    const { children } = $props();
</script>

<div class="flex h-auto my-0 w-dvw flex-col items-center bg-primary-900 dark:text-white">
    <NavBar />

    <main class="flex min-h-screen flex-col items-center justify-center max-w-6xl px-4 mx-4 rounded-lg shadow-lg overflow-hidden">
        {@render children()}
    </main>

    <Footer />
</div>
