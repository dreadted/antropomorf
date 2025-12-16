<script lang="ts">
	import { base } from '$app/paths';

	interface Props {
		title: string;
		image: string;
		bullets: string[];
		link: string;
		tech?: string;
		index?: number;
	}

	let { title, image, bullets, link, tech = '', index = 0 }: Props = $props();

	const imgSrc = $derived(`${base}${image}`);

	const techArray = $derived(
		tech
			.split(',')
			.map((t) => t.trim())
			.filter(Boolean)
	);

	let hasBeenHovered = $state(false);

	function handleMouseEnter() {
		hasBeenHovered = true;
	}
</script>

<article class="card" style="animation-delay: {index / 2}s;" onmouseenter={handleMouseEnter}>
	<a href={link} target="_blank">
		<img src={imgSrc} alt={title} />
	</a>
	<div class="card-content" class:expanded={hasBeenHovered}>
		{#if techArray.length > 0}
			<div class="badges">
				{#each techArray as badge}
					<span class="badge" data-tech={badge.toLowerCase()}>{badge}</span>
				{/each}
			</div>
		{/if}
		<h2>
			<a href={link} target="_blank">
				{title}
			</a>
		</h2>
		<ul>
			{#each bullets as bullet}
				<li>{bullet}</li>
			{/each}
		</ul>
	</div>
</article>

<style>
	@keyframes cardAnimation {
		0% {
			opacity: 0;
			transform: scale3d(0.9, 0.9, 0.9);
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 0.8;
		}
	}

	.card {
		color: var(--white);
		font-family: 'Source Code Pro';
		font-size: calc(var(--font-size) / 1.6);
		border-radius: 8px;
		opacity: 0;
		animation: cardAnimation 1s ease-in-out 1 forwards;
	}

	.card-content {
		padding: 0 0.5rem 0.5rem;
		opacity: 0;
		max-height: 0;
		transition: all 0.5s;
	}

	.card-content.expanded {
		opacity: 1;
		max-height: 10rem;
	}

	h2 {
		margin: 0.5rem 0;
	}

	a {
		color: var(--white);
		display: inline-flex;
		opacity: 0.9;
	}

	a:hover {
		color: var(--primary);
		opacity: 1;
	}

	img {
		width: 100%;
		border-radius: 4px;
	}

	ul {
		margin-inline-start: -1rem;
		line-height: 0;
		transition: all 0.5s;
	}

	.card-content.expanded ul {
		line-height: 1.2;
	}

	li {
		padding: 0.25rem;
	}

	.badges {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 1rem 0;
	}

	.badge {
		display: inline-block;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		font-size: 0.75em;
		font-weight: 600;
		color: var(--white);
	}

	.badge[data-tech='php'] {
		background-color: var(--php);
	}

	.badge[data-tech='js'] {
		background-color: var(--js);
		color: var(--black);
	}

	.badge[data-tech='css'] {
		background-color: var(--css);
	}

	.badge[data-tech='wp'] {
		background-color: var(--wp);
	}
</style>
