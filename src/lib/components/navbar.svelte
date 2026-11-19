<script lang="ts">
	import * as NavigationMenu from "#lib/components/ui/navigation-menu/index.ts";
</script>


<NavigationMenu.Root>
    <NavigationMenu.List class="gap-5">
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