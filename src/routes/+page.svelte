<script lang="ts">
  import Header from '$lib/Header.svelte';
  import ProjectCard from '$lib/ProjectCard.svelte';
  import { projects } from '$lib/projects';
</script>

<main>
  <Header />

  <section class="projects">
    {#each projects as project}
      <ProjectCard {...project} />
    {/each}
  </section>
</main>

<style>
  main {
    max-width: 1024px;
    margin: 4rem auto;
    padding: 1rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
</style>
