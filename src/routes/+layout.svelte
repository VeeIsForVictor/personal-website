<script lang="ts">
    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';
    import NavBar from '$lib/components/NavBar.svelte';

    const { children } = $props();
</script>

<div class="flex h-screen w-dvw flex-col items-center">
    <NavBar />

    <main class="flex h-full flex-col items-center justify-center">
        {@render children()}
    </main>

    <Footer />
</div>
