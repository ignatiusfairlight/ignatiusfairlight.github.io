<script lang="ts">
	import './layout.css';
	import { Navbar, NavBrand, NavLi, NavUl } from "flowbite-svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon"/></svelte:head>
<Navbar>
  <NavBrand href="/">
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Fairlight</span>
  </NavBrand>
  <NavUl>
    <NavLi href="/about">About Me</NavLi>
    <NavLi href="/resume">Resume</NavLi>
    <NavLi href="/projects">Projects</NavLi>
    <NavLi href="/blog">Blog</NavLi>
    <NavLi href="/contact">Contact Me</NavLi>
  </NavUl>
</Navbar>
<main>
  {@render children()}
</main>

