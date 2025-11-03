<script>
    const { data } = $props();
    const { article } = $derived(data);
</script>

<!-- Main article container with max-width for readability -->
<article class="mx-auto w-sm max-w-3xl px-4 py-8 lg:min-w-xl">
    <!-- Article Title -->
    <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">{article.title}</h1>

    <!-- Publication Date -->
    <p class="mb-8 text-sm text-gray-500">
        Published on: {new Date(article.date_created).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })}
    </p>

    <!-- Article Content (Rendered HTML from Directus) -->
    <div class="prose dark:prose-invert max-w-none">
        {@html article.content}
    </div>
</article>
