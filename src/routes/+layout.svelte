<script lang="ts">
    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';
    import NavBar from '$lib/components/NavBar.svelte';

    const { children } = $props();
</script>

<svelte:head>
    <title>VeeIsForVictor - Personal</title>
</svelte:head>

<div class="bg-primary-900 my-0 flex min-h-screen w-dvw flex-col items-center dark:text-white overscroll-contain">
    <NavBar />

    <main
        class="z-0 mx-4 flex h-full max-w-6xl m-0 grow flex-col items-center justify-center px-4"
    >
        {@render children()}
    </main>

    <Footer />
</div>
