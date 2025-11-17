<script lang="ts">
    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';
    import NavBar from '$lib/components/NavBar.svelte';

    const { children, data } = $props();
    const { meta: { title, description } } = data;
</script>

<svelte:head>
    <title>{title}</title>
    <meta charset="utf-8" />
    <meta name="description" content={description} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://veeisforvictor.work" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="%sveltekit.assets%/favicons/android-chrome-192x192.png" />
</svelte:head>

<div
    class="bg-primary-900 my-0 flex min-h-screen w-dvw flex-col items-center overscroll-contain dark:text-white overflow-x-clip"
>
    <NavBar />

    <main class="z-0 m-0 mx-4 flex h-full max-w-6xl grow flex-col items-center justify-center px-4">
        {@render children()}
    </main>

    <Footer />
</div>
