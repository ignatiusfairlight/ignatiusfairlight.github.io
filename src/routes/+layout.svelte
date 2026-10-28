<script lang="ts">
    import "./layout.css";
    import favicon from "#lib/assets/favicon.svg";
    import "carbon-components-svelte/css/g100.css";
    import type { LayoutProps } from "./$types";
    import {
        Content,
        Stack,
        Header,
        SideNav,
        SideNavItems,
        SideNavLink,
        SkipToContent,
    } from "carbon-components-svelte";

    let isSideNavOpen = $state(false);
    let { children }: LayoutProps = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<Header companyName="Ignatius Fairlight" bind:isSideNavOpen>
    <svelte:fragment slot="skipToContent"><SkipToContent /></svelte:fragment>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
    <SideNavItems>
        <SideNavLink text="About Me" href="/" />
        <SideNavLink text="Projects" href="/projects" />
        <SideNavLink text="Writings" href="/writings" />
    </SideNavItems>
</SideNav>

<Content>
    <Stack gap={6}>
        {@render children()}
    </Stack>
</Content>


