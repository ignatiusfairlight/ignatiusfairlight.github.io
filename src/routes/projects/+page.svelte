<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
</script>

<main
	class="mx-auto flex h-[87dvh] flex-col items-start justify-center gap-4 px-10 sm:px-20 md:mx-20"
>
	<h1 class="text-4xl">Projects</h1>
	<Carousel.Root
		class="w-[80%] self-center"
		opts={{
			align: 'start',
			loop: true
		}}
	>
		<Carousel.Content>
			<Carousel.Item>
				<div class="p-1">
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
						<Card.Footer class="flex flex-col items-start justify-center">
							<a
								href="https://ignatiusfairlight.github.io/bank-dashboard-demo/"
								target="_blank"
								class="text-blue-600 underline underline-offset-4 visited:text-purple-600"
								>Live Website
							</a>
							<a
								href="https://github.com/ignatiusfairlight/bank-dashboard-demo"
								target="_blank"
								class="text-blue-600 underline underline-offset-4 visited:text-purple-600"
								>Github Link
							</a>
						</Card.Footer>
					</Card.Root>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div class="p-1">
					<Card.Root>
						<Card.Header>
							<Card.Title>Event Scheduler</Card.Title>
						</Card.Header>
						<Card.Content>
							<img alt="x" class="hidden md:block" />
							<Card.Description
								>A responsive event management web app built with SvelteKit, Tailwind CSS, and
								shadcn-svelte, featuring an interactive calendar and a sortable, filterable data
								table. Users can organize events by date, name, or location. Core functionality is
								complete, with planned improvements including mobile responsiveness and user
								authentication.</Card.Description
							>
						</Card.Content>
						<Card.Footer class="flex flex-col items-start justify-center">
							<a
								href="https://ignatiusfairlight.github.io/scheduler-demo/"
								target="_blank"
								class="text-blue-600 underline underline-offset-4 visited:text-purple-600"
								>Live Website
							</a>
							<a
								href="https://github.com/ignatiusfairlight/scheduler-demo"
								target="_blank"
								class="text-blue-600 underline underline-offset-4 visited:text-purple-600"
								>Github Link</a
							>
						</Card.Footer>
					</Card.Root>
				</div>
			</Carousel.Item>
		</Carousel.Content>
		<Carousel.Previous class="ml-3 md:ml-0" />
		<Carousel.Next class="mr-3 md:mr-0" />
	</Carousel.Root>
</main>
