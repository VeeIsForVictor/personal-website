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
    class="bg-primary-900 my-0 flex min-h-screen w-svw flex-col items-center overscroll-contain dark:text-white overflow-x-hidden"
>
    <NavBar />

    <main class="z-0 m-0 flex h-full w-full grow flex-col items-center justify-center">
        {@render children()}
    </main>

    <Footer />
</div>
