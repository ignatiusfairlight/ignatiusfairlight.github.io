<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<main
	class="mx-auto flex h-[87dvh] flex-col items-start justify-center gap-4 px-10 sm:px-20 md:mx-20"
>
	<section
		class="mx-5 flex flex-col gap-4 text-justify text-base
		leading-relaxed
		md:text-lg
		lg:mx-40
		xl:mx-65
		2xl:mx-85"
	>
		<h1 class="text-4xl">Projects</h1>
		<div>
			<Card.Root>
				<Card.Header>
					<Card.Title>Personal Banking Dashboard</Card.Title>
				</Card.Header>
				<Card.Content>
					<img alt="x" class="hidden md:block" />
					<Card.Description
						>A clean, responsive banking UI built with SvelteKit and Tailwind CSS. Inspired by
						real-world finance apps, it features account overviews and transaction summaries.
						Upcoming updates include dark mode, charts, and mock data to simulate a realistic
						experience.</Card.Description
					>
				</Card.Content>
				<Card.Footer class="grid grid-cols-2 items-start justify-center gap-1">
					<a
						href="https://ignatiusfairlight.github.io/bank-dashboard-demo/"
						target="_blank"
						class="col-span-2 text-blue-600 underline underline-offset-4 visited:text-purple-600"
						>Live Website
					</a>
					<a
						href="https://github.com/ignatiusfairlight/bank-dashboard-demo"
						target="_blank"
						class="text-blue-600 underline underline-offset-4 visited:text-purple-600"
						>Github Link
					</a>
					<p class="self-center text-right">Status: In progress</p>
				</Card.Footer>
			</Card.Root>
		</div>
		<div>
			<Card.Root>
				<Card.Header>
					<Card.Title>Event Scheduler</Card.Title>
				</Card.Header>
				<Card.Content>
					<img alt="x" class="hidden md:block" />
					<Card.Description
						>A responsive event management web app built with SvelteKit, Tailwind CSS, and
						shadcn-svelte, featuring an interactive calendar and a sortable, filterable data table.
						Users can organize events by date, name, or location. Core functionality is complete,
						with planned improvements including mobile responsiveness and user authentication.</Card.Description
					>
				</Card.Content>
				<Card.Footer class="grid grid-cols-2 items-start justify-center gap-1">
					<a
						href="https://ignatiusfairlight.github.io/scheduler-demo/"
						target="_blank"
						class="col-span-2 text-blue-600 underline underline-offset-4 visited:text-purple-600"
						>Live Website
					</a>
					<a
						href="https://github.com/ignatiusfairlight/scheduler-demo"
						target="_blank"
						class="text-blue-600 underline underline-offset-4 visited:text-purple-600"
						>Github Link
					</a>
					<p class="self-center text-right">Status: In progress</p>
				</Card.Footer>
			</Card.Root>
		</div>
	</section>
</main>
