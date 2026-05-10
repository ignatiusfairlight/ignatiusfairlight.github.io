<script lang="ts">
	import './layout.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon"/></svelte:head>
<Navbar>
  <NavBrand href="/">
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Fairlight Center</span>
  </NavBrand>
  <NavUl>
    <NavLi href="/dashboard">Dashboard</NavLi>
    <NavLi href="/admin-resume">Resume</NavLi>
    <NavLi href="/admin-projects">Projects</NavLi>
    <NavLi href="/admin-blog">Blog</NavLi>
  </NavUl>
</Navbar>
<main>
  {@render children()}
</main>