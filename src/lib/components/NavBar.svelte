<script lang="ts">
    import { NavigationMenu } from 'bits-ui';
</script>

<NavigationMenu.Root class="w-full p-4 bg-white shadow-md rounded-lg">
    <NavigationMenu.List class="flex w-1/2 justify-around mx-auto">
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