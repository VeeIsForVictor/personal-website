<script lang="ts">
    import { NavigationMenu } from 'bits-ui';
</script>

<NavigationMenu.Root class="w-full p-4 shadow-md dark:bg-primary-950">
    <NavigationMenu.List class="mx-auto flex w-1/2 items-center justify-around gap-4">
        <NavigationMenu.Item>
            <NavigationMenu.Link href="/">Home</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
            <NavigationMenu.Link href="/work">Work</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
            <NavigationMenu.Link href="/blog">Blog</NavigationMenu.Link>
        </NavigationMenu.Item>
    </NavigationMenu.List>
</NavigationMenu.Root>
