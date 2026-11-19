<script lang="ts">
	import './layout.css';
	import * as NavigationMenu from "#lib/components/ui/navigation-menu/index.ts";
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>


<NavigationMenu.Root>
    <NavigationMenu.List>
        <NavigationMenu.Item>
            <NavigationMenu.Link href="/">
                About
            </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
            <NavigationMenu.Link  href="/projects">
                Projects
            </NavigationMenu.Link>
        </NavigationMenu.Item>
    </NavigationMenu.List>
</NavigationMenu.Root>

{@render children()}
