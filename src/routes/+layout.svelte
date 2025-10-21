<script lang="ts">
    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';
    import NavBar from '$lib/components/NavBar.svelte';

    const { children } = $props();
</script>

<svelte:head>
    <title>VeeIsForVictor - Personal</title>
</svelte:head>

<div class="flex min-h-screen my-0 w-dvw flex-col items-center bg-primary-900 dark:text-white">
    <NavBar />

    <main class="flex flex-grow h-full z-0 flex-col items-center justify-center max-w-6xl px-4 mx-4">
        {@render children()}
    </main>

    <Footer />
</div>
