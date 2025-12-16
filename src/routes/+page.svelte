<script lang="ts">
	import Header from '$lib/Header.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import Contact from '$lib/Contact.svelte';
	import { projects } from '$lib/projects';
</script>

<main>
	<Header />

	<section class="projects">
		{#each projects as project, i}
			<ProjectCard {...project} index={i + 1} />
		{/each}
	</section>

	<Contact />
</main>

<style>
	main {
		max-width: 1024px;
		margin: 0 auto;
		padding: 1rem;
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 4rem;
	}
</style>
