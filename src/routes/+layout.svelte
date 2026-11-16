<script lang="ts">
    import "./layout.css";
    import favicon from "#lib/assets/favicon.svg";
    import { Navigation } from "@skeletonlabs/skeleton-svelte";
    import Mail from "@lucide/svelte/icons/mail";
    import { siGithub } from "simple-icons";
    import type { LayoutProps } from "./$types";

    const links = [
        { label: "About", href: "/" },
        { label: "Projects", href: "/projects" },
    ];

    let { children }: LayoutProps = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div>
    <header><a href="/">Ignatius Fairlight</a></header>

    <main>
        <aside>
            <Navigation
                layout="sidebar"
            >
                <Navigation.Content>
                    {#each links as link (link)}
                        <Navigation.TriggerAnchor href={link.href}>
                            <Navigation.TriggerText
                                >{link.label}</Navigation.TriggerText
                            >
                        </Navigation.TriggerAnchor>
                    {/each}
                </Navigation.Content>
            </Navigation>
        </aside>
        <section class="p-5">{@render children()}</section>
    </main>

    <footer>
        <div>© 2026 Ignatius Fairlight.</div>
        <div>
            <a title="Email Address" href="mailto:lawaierang@gmail.com">
                <Mail />
            </a>
            <a
                title="GitHub Profile"
                href="https://github.com/ignatiusfairlight"
                ><svg
                    role="img"
                    viewBox="0 0 24 24"
                    class="size-5"
                    fill="currentColor"
                >
                    <path d={siGithub.path} />
                </svg></a
            >
        </div>
    </footer>
</div>
