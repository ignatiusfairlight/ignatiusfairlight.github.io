<script lang="ts">
	import './layout.css';
	import ModeToggle from "#lib/components/mode-toggle.svelte";
	import Navbar from '#lib/components/navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<div class="w-full max-w-3xl mx-auto px-10 sm:px-12 lg:px-14 pt-25">
	<ModeWatcher />
	<header class="flex mb-10 justify-between">
		<a href="/">Ignatius Fairlight</a>
		<ModeToggle />
	</header>
	<nav class="flex ml-5 my-2">
		<Navbar />
	</nav>
	<main class="my-5 min-h-[40dvh]">
		{@render children()}
	</main>
	<footer>
		<p>© 2026 Ignatius Fairlight</p>
	</footer>
</div>
