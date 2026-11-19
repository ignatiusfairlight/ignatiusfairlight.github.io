<script lang="ts">
	import './layout.css';
	import Navbar from '#lib/components/navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<div class="w-full max-w-3xl mx-auto px-10 sm:px-12 lg:px-14 mt-35">
	<ModeWatcher />
	<header class="flex justify-between">
		<a href="/">IF</a>
		<p>Ignatius Fairlight</p>
	</header>
	<nav class="flex ml-5 my-2">
		<Navbar />
	</nav>
	<main class="my-5">
		{@render children()}
	</main>
	<footer>
		<p>Copyright of Ignatius Fairlight</p>
	</footer>
</div>
