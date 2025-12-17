<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/Header.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import Footer from '$lib/Footer.svelte';
	import { projects } from '$lib/projects';
	import { activeCardIndex } from '$lib/stores';

	onMount(() => {
		// On mobile, activate the very first card by default on page load.
		const isMobile = window.matchMedia('(max-width: 600px)').matches;
		if (isMobile) {
			activeCardIndex.set(1); // Set the first card (index 1) as active
		}
	});
</script>

<main>
	<Header />

	<section class="projects">
		{#each projects as project, i}
			<ProjectCard {...project} index={i + 1} />
		{/each}
	</section>

	<Footer />
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
