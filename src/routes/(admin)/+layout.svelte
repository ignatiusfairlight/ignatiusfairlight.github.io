<script lang="ts">
	import './layout.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon"/></svelte:head>
<Navbar>
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