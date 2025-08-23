<script>
  const { data } = $props();
  const { article } = $derived(data);
</script>

<!-- Main article container with max-width for readability -->
<article class="max-w-3xl mx-auto px-4 py-8">
  <!-- Article Title -->
  <h1 class="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>

  <!-- Publication Date -->
  <p class="text-gray-500 text-sm mb-8">
    Published on: {new Date(article.date_created).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
  </p>

  <!-- Article Content (Rendered HTML from Directus) -->
  <div class="prose prose-lg max-w-none">
    {@html article.content}
  </div>
</article>