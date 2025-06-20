<script lang="ts">
    import '../app.css';
    import Background from '$lib/components/Background.svelte';

    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

    const { children } = $props();
</script>

<Background />

<Navbar class="bg-primary-800 text-surface-50">
    <NavBrand href="/">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >VeeIsForVictor</span
        >
    </NavBrand>
    <NavHamburger />
    <NavUl activeClass="text-surface-50">
        <NavLi href="/">Home</NavLi>
        <NavLi href="/work">Work</NavLi>
        <NavLi href="/blog">Blog</NavLi>
        <NavLi href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>

<div class="container">
    {@render children()}
</div>
