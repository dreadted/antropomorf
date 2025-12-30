<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Header from '$lib/Header.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import Footer from '$lib/Footer.svelte';
	import { projects } from '$lib/projects';
	import { activeCardIndex } from '$lib/stores';

	let cardElements: HTMLElement[] = [];
	let observer: IntersectionObserver;

	// A map to keep track of all currently intersecting (visible) cards and their visibility ratio
	const intersectingEntries = new Map<Element, number>();

	let isMobile = false;
	let mql: MediaQueryList;

	const handleScroll = () => {
		// Special case: When scrolled to the absolute top, activate the first card.
		if (isMobile && window.scrollY === 0) {
			activeCardIndex.set(1);
		}

		// Special case: When scrolled to the absolute bottom, activate the last card.
		const isAtBottom =
			Math.ceil(window.innerHeight + window.scrollY) >=
			document.documentElement.scrollHeight - 100;
		if (isMobile && isAtBottom) {
			activeCardIndex.set(projects.length);
		}
	};

	const handleResize = (e: MediaQueryListEvent) => {
		isMobile = e.matches;
	};

	onMount(() => {
		mql = window.matchMedia('(max-width: 599px)');
		isMobile = mql.matches;

		window.addEventListener('scroll', handleScroll);

		const options = {
			root: null,
			rootMargin: '0px',
			// Trigger updates at several points of visibility
			threshold: [0, 0.25, 0.5, 0.75, 1]
		};

		observer = new IntersectionObserver((entries) => {
			if (!isMobile) {
				return;
			}

			for (const entry of entries) {
				if (entry.isIntersecting) {
					intersectingEntries.set(entry.target, entry.intersectionRatio);
				} else {
					intersectingEntries.delete(entry.target);
				}
			}

			let mostVisibleCardIndex: number | null = null;
			let maxRatio = 0;

			// Find the most visible card among all currently intersecting ones
			for (const [element, ratio] of intersectingEntries.entries()) {
				if (ratio > maxRatio) {
					maxRatio = ratio;
					mostVisibleCardIndex = parseInt((element as HTMLElement).dataset.index || '0');
				}
			}

			activeCardIndex.set(mostVisibleCardIndex);
		}, options);

		cardElements.forEach((el) => observer.observe(el));

		mql.addEventListener('change', handleResize);
	});

	onDestroy(() => {
		if (mql) {
			mql.removeEventListener('change', handleResize);
			window.removeEventListener('scroll', handleScroll);
			observer.disconnect();
		}
	});
</script>

<main>
	<Header />

	<section class="projects">
		{#each projects as project, i}
			<ProjectCard {...project} index={i + 1} bind:articleEl={cardElements[i]} />
		{/each}
	</section>

	<Footer />
</main>

<style>
	main {
		margin: 0 auto;
		padding: 1rem;
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 2em;
	}
</style>
