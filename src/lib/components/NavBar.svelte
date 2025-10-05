<script lang="ts">
    import { Label, NavigationMenu, Switch } from 'bits-ui';
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
        <NavigationMenu.Item class="flex items-center gap-2">
            <Switch.Root
                class="data-[state=unchecked]:shadow-mini-inset dark:data-[state=checked]:bg-foreground peer inline-flex h-[36px] min-h-[36px] w-[60px] shrink-0 cursor-pointer items-center rounded-full px-[3px] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white data-[state=unchecked]:bg-gray-300"
                id="dark-mode-toggle"
            >
                <Switch.Thumb
                    class="data-[state=unchecked]:shadow-mini dark:border-background/30 dark:bg-foreground dark:shadow-popover pointer-events-none block size-[30px] shrink-0 rounded-full bg-gray-300 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 dark:border dark:data-[state=unchecked]:border"
                />
            </Switch.Root>
            <Label.Root for="dark-mode-toggle">Dark Mode</Label.Root>
        </NavigationMenu.Item>
    </NavigationMenu.List>
</NavigationMenu.Root>
