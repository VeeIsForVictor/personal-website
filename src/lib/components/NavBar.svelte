<script lang="ts">
    import { Label, NavigationMenu, Switch } from 'bits-ui';
</script>

<NavigationMenu.Root class="w-full p-4 bg-white shadow-md rounded-lg">
    <NavigationMenu.List class="flex w-1/2 justify-around items-center mx-auto">
        <NavigationMenu.Item>
            <NavigationMenu.Link href="/">Home</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
            <NavigationMenu.Link href="/work">Work</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
            <NavigationMenu.Link href="/blog">Blog</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item class="flex items-center gap-2">
            <Switch.Root class="data-[state=checked]:bg-white data-[state=unchecked]:bg-gray-300 data-[state=unchecked]:shadow-mini-inset dark:data-[state=checked]:bg-foreground focus-visible:outline-hidden peer inline-flex h-[36px] min-h-[36px] w-[60px] shrink-0 cursor-pointer items-center rounded-full px-[3px] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="dark-mode-toggle">
                <Switch.Thumb class="bg-gray-300 data-[state=unchecked]:shadow-mini dark:border-background/30 dark:bg-foreground dark:shadow-popover pointer-events-none block size-[30px] shrink-0 rounded-full transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 dark:border dark:data-[state=unchecked]:border" />
            </Switch.Root>
            <Label.Root for="dark-mode-toggle">Dark Mode</Label.Root>
        </NavigationMenu.Item>
    </NavigationMenu.List>
</NavigationMenu.Root>