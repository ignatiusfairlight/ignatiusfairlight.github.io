<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<main
	class="mx-auto flex h-[87dvh] flex-col items-start justify-center gap-4 px-10 sm:px-20 md:mx-20"
>
	<h1 class="text-4xl">Resume</h1>
	<section class="flex flex-col gap-4 text-justify text-base leading-relaxed sm:text-lg">
		<Card.Root>
			<Card.Header>
				<Card.Title>Freelance Web Developer</Card.Title>
			</Card.Header>
			<Card.Content>
				<Card.Description
					>A clean, responsive banking UI built with SvelteKit and Tailwind CSS. Inspired by
					real-world finance apps, it features account overviews and transaction summaries. Upcoming
					updates include dark mode, charts, and mock data to simulate a realistic experience.</Card.Description
				>
			</Card.Content>
		</Card.Root>
	</section>
</main>
