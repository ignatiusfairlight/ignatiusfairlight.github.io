<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
</script>

<main class="mx-auto flex h-[90dvh] flex-col items-start justify-center gap-4 px-10 sm:px-20">
	<h1 class="text-4xl">Projects</h1>
    <Carousel.Root class="w-full">
        <Carousel.Content>
          {#each Array(5), i}
            <Carousel.Item>
              <div class="p-1">
                <Card.Root>
                  <Card.Content
                    class="h-[60dvh] flex items-center justify-center p-6"
                  >
                    <span class="text-4xl font-semibold">{i + 1}</span>
                  </Card.Content>
                </Card.Root>
              </div>
            </Carousel.Item>
          {/each}
        </Carousel.Content>
        <Carousel.Previous class="ml-3 md:ml-0" />
        <Carousel.Next class="mr-3 md:mr-0"/>
      </Carousel.Root>
</main>
