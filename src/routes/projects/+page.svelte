<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
</script>

<main class="mx-auto flex h-[87dvh] flex-col items-start justify-center gap-4 px-10 sm:px-20">
	<h1 class="text-4xl">Projects</h1>
    <Carousel.Root class="w-full">
        <Carousel.Content>
            <Carousel.Item>
              <div class="p-1">
                <Card.Root>
                  <Card.Header>
                    <Card.Title>Project 1</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <img alt="x" class="hidden md:block" />
                    <Card.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti labore velit veritatis provident debitis aperiam? Et illum suscipit sint dolor velit maiores repudiandae quos. Hic unde voluptate qui aliquid?</Card.Description>
                  </Card.Content>
                  <Card.Footer>
                    <p>Github Link</p>
                  </Card.Footer>
                </Card.Root>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="p-1">
                <Card.Root>
                  <Card.Header>
                    <Card.Title>Project 2</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <img alt="x" class="hidden md:block" />
                    <Card.Description>Description of Project</Card.Description>
                  </Card.Content>
                  <Card.Footer>
                    <p>Github Link</p>
                  </Card.Footer>
                </Card.Root>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="p-1">
                <Card.Root>
                  <Card.Header>
                    <Card.Title>Project 3</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <img alt="x" class="hidden md:block" />
                    <Card.Description>Description of Project</Card.Description>
                  </Card.Content>
                  <Card.Footer>
                    <p>Github Link</p>
                  </Card.Footer>
                </Card.Root>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="p-1">
                <Card.Root>
                  <Card.Header>
                    <Card.Title>Project 4</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <img alt="x" class="hidden md:block" />
                    <Card.Description>Description of Project</Card.Description>
                  </Card.Content>
                  <Card.Footer>
                    <p>Github Link</p>
                  </Card.Footer>
                </Card.Root>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="p-1">
                <Card.Root>
                  <Card.Header>
                    <Card.Title>Project 5</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <img alt="x" class="hidden md:block" />
                    <Card.Description>Description of Project</Card.Description>
                  </Card.Content>
                  <Card.Footer>
                    <p>Github Link</p>
                  </Card.Footer>
                </Card.Root>
              </div>
            </Carousel.Item>
        </Carousel.Content>
        <Carousel.Previous class="ml-3 md:ml-0" />
        <Carousel.Next class="mr-3 md:mr-0"/>
      </Carousel.Root>
</main>
