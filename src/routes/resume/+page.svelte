<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<main
	class="mx-auto mt-10 flex h-auto flex-col items-start justify-center gap-4 overflow-y-scroll px-10"
>
	<section
		class="flex flex-col
		leading-relaxed
		lg:mx-20
		xl:mx-45
		2xl:mx-65"
	>
		<div class="mb-2">
			<Card.Root>
				<Card.Header>
					<Card.Title class="flex flex-col gap-1">
						<p class="text-lg lg:text-2xl">Freelance Web Developer</p>
						<p class="text-sm lg:text-lg">July 2024 - Present</p>
					</Card.Title>
				</Card.Header>
				<Card.Content>
					<ul class="flex list-disc flex-col gap-2 px-5 text-justify text-sm">
						<li>
							Designed and developed custom scheduling and web applications using Svelte,
							TailwindCSS, and HTML for clients in the non-profit and small business sectors.
						</li>
						<li>
							Built a custom volunteer scheduling web app for a local church to efficiently manage
							weekly service duties and volunteer rosters, streamlining communication and reducing
							manual coordination.
						</li>
						<li>
							Developed responsive, user-friendly front-end interfaces with a focus on clear user
							experience and mobile compatibility.
						</li>
						<li>
							Collaborated directly with stakeholders to gather requirements, deliver prototypes,
							and iterate based on feedback.
						</li>
					</ul>
				</Card.Content>
			</Card.Root>
		</div>
		<div class="mb-2">
			<Card.Root>
				<Card.Header>
					<Card.Title class="flex flex-col">
						<p class="text-lg lg:text-2xl">User Experience Analyst</p>
						<p class="text-sm lg:text-lg">October 2023 - June 2024</p>
					</Card.Title>
				</Card.Header>
				<Card.Content>
					<ul class="flex list-disc flex-col gap-2 px-5 text-justify text-sm">
						<li>
							Analyzed survey data from up to 5,000 entries using advanced Excel functions to
							extract actionable insights.
						</li>
						<li>
							Produced interim and final reports summarizing user feedback trends and recommending
							strategic improvements to enhance web services.
						</li>
						<li>
							Conducted usability testing with tools like Google Lighthouse to assess and report on
							performance and accessibility.
						</li>
						<li>
							Facilitated user survey sessions and live walkthroughs for 10+ participants per
							session, ensuring accurate data collection.
						</li>
					</ul>
				</Card.Content>
			</Card.Root>
		</div>
		<div class="mb-2">
			<Card.Root>
				<Card.Header>
					<Card.Title class="flex flex-col">
						<p class="text-lg lg:text-2xl">Intern, Operation Serivces</p>
						<p class="text-sm lg:text-lg">October 2022 - January 2023</p>
					</Card.Title>
				</Card.Header>
				<Card.Content>
					<ul class="flex list-disc flex-col gap-2 px-5 text-justify text-sm">
						<li>
							Assisted in preparing monthly Value of Work Done (VOWD) reports to support project ROI
							analysis and resource allocation strategies.
						</li>
						<li>
							Maintained effective communication with supervisors and stakeholders to streamline
							operational workflows.
						</li>
						<li>
							Documented meeting minutes with precision to ensure accountability and track key
							decisions across teams.
						</li>
					</ul>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
</main>
