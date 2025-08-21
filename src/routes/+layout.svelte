<script lang="ts">
    import '../app.css';

    const { children } = $props();
</script>

<div class="w-dvw">
    <main class="flex flex-col items-center justify-center h-screen">
        {@render children()}
    </main>
</div>

