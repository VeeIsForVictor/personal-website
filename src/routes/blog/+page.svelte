<script lang="ts">
    import { Button } from 'bits-ui';

    const { data } = $props();
    const { articles } = $derived(data);
</script>

<div class="space-y-6">
  {#each articles as article (article.id)}
    <!-- This div acts as a "card" -->
    <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <h2 class="text-xl font-semibold text-gray-900 mb-2">
        {article.title}
      </h2>
      <p class="text-sm text-gray-500 mb-4">
        Published on: {new Date(article.date_created).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      <p class="text-gray-700 mb-4">
        <!-- Placeholder for a future excerpt field -->
        Article summary or excerpt will go here.
      </p>
      <Button.Root onclick={() => console.log('Navigate to article:', article.id)}>
        Read More
      </Button.Root>
    </div>
  {/each}
</div>