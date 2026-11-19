<script lang="ts">
	import './layout.css';
	import Navbar from '#lib/components/navbar.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<nav>
	<Navbar />
</nav>
<main>
	{@render children()}
</main>
<footer>
    <p>Copyright of Ignatius Fairlight</p>
</footer>
