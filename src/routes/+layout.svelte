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
        { label: "Writings", href: "/writings" },
    ];

    let { children }: LayoutProps = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-dvh px-100 py-50 flex flex-col">
    <header class="w-full p-2">Ignatius Fairlight</header>

    <main class="grid grid-cols-[1fr_3fr] w-full min-h-[50dvh] p-2 gap-4">
        <aside>
            <Navigation
                layout="sidebar"
                class="grid grid-rows-[10px_10px_auto] gap-4 bg-transparent justify-start"
            >
                <Navigation.Content class="place-content-around">
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

    <footer class="w-full flex justify-between p-2">
        <div>© 2026 Ignatius Fairlight.</div>
        <div class="flex gap-3 justify-end">
            <a title="Email Address" href="mailto:lawaierang@gmail.com">
                <Mail class="size-5" />
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
