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

<div class="my-15 mx-100">
    <header class="m-5">Ignatius Fairlight</header>

    <aside>
        <div class="w-full min-h-[728px] grid grid-cols-[auto_1fr] items-stretch">
            <!-- -->
            <Navigation
                layout="sidebar"
                class="grid grid-rows-[auto_auto_1fr] gap-4 bg-transparent"
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
            <!-- -->
            <div class="flex flex-col justify-center items-center">
                {@render children()}
            </div>
        </div>
    </aside>
    <footer
        class="text-sm text-gray-400 my-5 flex justify-between items-center"
    >
        <div>© 2026 Ignatius Fairlight.</div>
        <div class="flex gap-3 items-center justify-end">
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
