<script lang="ts">
	import '../app.css';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import { onNavigate } from '$app/navigation';
	import { MediaQuery } from 'svelte/reactivity';
	import { ModeWatcher } from 'mode-watcher';
	import { Menu } from '@lucide/svelte';
	import DrawerClose from '$lib/components/ui/drawer/drawer-close.svelte';
	import DarkModeToggleButton from '$lib/components/dark-mode-toggle-button.svelte';
	
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	const isDesktop = new MediaQuery('(min-width: 768px)');

	let { children } = $props();
</script>

{#if isDesktop.current}
	<div class="mt-5 mr-10 flex flex-col items-end justify-center">
		<NavigationMenu.Root>
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="./" class={navigationMenuTriggerStyle()}>Home</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="resume" class={navigationMenuTriggerStyle()}>Resume</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="projects" class={navigationMenuTriggerStyle()}>Projects</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="contact" class={navigationMenuTriggerStyle()}>Contact</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<DarkModeToggleButton />
				</NavigationMenu.Item>
			</NavigationMenu.List>
		</NavigationMenu.Root>
	</div>
{:else}
	<div class="ml-5 pt-5">
		<Drawer.Root direction="left">
			<Drawer.Trigger>
				<Drawer.Trigger>
					<span class="sr-only">Menu</span>
					<Menu />
				</Drawer.Trigger>
			</Drawer.Trigger>
			<Drawer.Content class="ml-5 flex flex-col items-start justify-center gap-10">
				<Drawer.Close>
					<a href="./" class={navigationMenuTriggerStyle()}>Home</a>
				</Drawer.Close>
				<DrawerClose>
					<a href="resume" class={navigationMenuTriggerStyle()}>Resume</a>
				</DrawerClose>
				<Drawer.Close>
					<a href="projects" class={navigationMenuTriggerStyle()}>Projects</a>
				</Drawer.Close>
				<Drawer.Close>
					<a href="contact" class={navigationMenuTriggerStyle()}>Contact</a>
				</Drawer.Close>
				<div class="flex w-[90%] items-center justify-between gap-4 py-2">
					<p class={navigationMenuTriggerStyle()}>Dark Mode</p>
					<DarkModeToggleButton />
				</div>
			</Drawer.Content>
		</Drawer.Root>
	</div>
{/if}

<ModeWatcher />
{@render children()}