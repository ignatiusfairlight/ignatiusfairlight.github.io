<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<main
	class="mx-auto flex h-[86dvh] flex-col items-start justify-center gap-4 px-10 sm:px-20 md:mx-20"
>
	<section
		class="mx-10 flex flex-col text-justify
		text-base
		leading-relaxed
		md:text-lg
		lg:mx-20
		xl:mx-45
		2xl:mx-65"
	>
		<h1 class="mb-5 text-4xl">Resume</h1>
		<div class="h-[70dvh] overflow-y-scroll pr-5">
			<div class="mb-2">
				<Card.Root>
					<Card.Header>
						<Card.Title class="flex flex-col">
							<p class="text-2xl">Freelance Web Developer</p>
							<p class="text-base">July 2024 - Present</p>
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<Card.Description>
							<ul class="flex list-disc flex-col gap-2 px-5">
								<li>
									Designed and developed custom scheduling and web applications using Svelte,
									TailwindCSS, and HTML for clients in the non-profit and small business sectors.
								</li>
								<li>
									Built a custom volunteer scheduling web app for a local church to efficiently
									manage weekly service duties and volunteer rosters, streamlining communication and
									reducing manual coordination.
								</li>
								<li>
									Developed responsive, user-friendly front-end interfaces with a focus on clear
									user experience and mobile compatibility.
								</li>
								<li>
									Collaborated directly with stakeholders to gather requirements, deliver
									prototypes, and iterate based on feedback.
								</li>
							</ul>
						</Card.Description>
					</Card.Content>
				</Card.Root>
			</div>
			<div class="mb-2">
				<Card.Root>
					<Card.Header>
						<Card.Title class="flex flex-col">
							<p class="text-2xl">User Experience Analyst</p>
							<p class="text-base">October 2023 - June 2024</p>
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<Card.Description>
							<ul class="flex list-disc flex-col gap-2 px-5">
								<li>
									Analyzed survey data from up to 5,000 entries using advanced Excel functions to
									extract actionable insights.
								</li>
								<li>
									Produced interim and final reports summarizing user feedback trends and
									recommending strategic improvements to enhance web services.
								</li>
								<li>
									Conducted usability testing with tools like Google Lighthouse to assess and report
									on performance and accessibility.
								</li>
								<li>
									Facilitated user survey sessions and live walkthroughs for 10+ participants per
									session, ensuring accurate data collection.
								</li>
							</ul>
						</Card.Description>
					</Card.Content>
				</Card.Root>
			</div>
			<div class="mb-2">
				<Card.Root>
					<Card.Header>
						<Card.Title class="flex flex-col">
							<p class="text-2xl">Intern, Operation Serivces</p>
							<p class="text-base">October 2022 - January 2023</p>
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<Card.Description>
							<ul class="flex list-disc flex-col gap-2 px-5">
								<li>
									Assisted in preparing monthly Value of Work Done (VOWD) reports to support project
									ROI analysis and resource allocation strategies.
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
						</Card.Description>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</section>
</main>
