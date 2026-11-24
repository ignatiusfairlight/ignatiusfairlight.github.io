<script lang="ts">
	import * as Card from '#lib/components/ui/card/index.ts';
	import { Projects } from './projects';
</script>

<div class="flex flex-col gap-5">
	{#each Projects as Project (Project.id)}
		<Card.Root>
			<Card.Header>
				<Card.Title>{Project.title}</Card.Title>
				<Card.Description>{Project.desc}</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>{Project.content}</p>
			</Card.Content>
		</Card.Root>
	{/each}
</div>
