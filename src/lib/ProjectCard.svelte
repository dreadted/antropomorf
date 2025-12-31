<script lang="ts">
	import { activeCardIndex } from '$lib/stores';

	interface Props {
		title: string;
		image: string;
		link: string;
		tech?: string;
		index?: number;
	}

	let {
		title,
		image,
		link,
		tech = '',
		index = 0,
		articleEl = $bindable()
	}: Props & { articleEl: HTMLElement } = $props();

	const techArray = $derived(
		tech
			.split(',')
			.map((t) => t.trim())
			.filter(Boolean)
	);

	const isActive = $derived($activeCardIndex === index);

	// Resolve the relative image path against the document's base URL.
	// This ensures it works correctly whether deployed at root or a subpath.
	const resolvedImageSrc = $derived(
		typeof window !== 'undefined' ? new URL(image, document.baseURI).href : image
	);

	let deactivateTimeout: ReturnType<typeof setTimeout>;

	function handleActivate() {
		clearTimeout(deactivateTimeout);
		activeCardIndex.set(index);
	}

	function handleDeactivate() {
		deactivateTimeout = setTimeout(() => {
			// Only deactivate if this card is still the active one.
			if ($activeCardIndex === index) activeCardIndex.set(null);
		}, 100);
	}
</script>

<article
	data-index={index}
	class="card"
	style="animation-delay: {(index - 1) * 0.1}s; {index === 1 ? 'animation: none; opacity: 1;' : ''}"
	class:active={isActive}
	onmouseenter={handleActivate}
	onmouseleave={handleDeactivate}
	onfocusout={handleDeactivate}
	bind:this={articleEl}
>
	<a href={link} target="_blank" rel="noopener noreferrer" class="card-link">
		<img
			src={resolvedImageSrc}
			alt={title}
			width="800"
			height="600"
			fetchpriority={index === 1 ? 'high' : 'auto'}
			loading={index === 1 ? 'eager' : 'lazy'}
		/>
		<div class="card-content" class:active={isActive}>
			<h2>{title}</h2>
			{#if techArray.length > 0}
				<div class="badges">
					{#each techArray as badge}
						<span class="badge" data-tech={badge.toLowerCase()}>
							{badge}
						</span>
					{/each}
				</div>
			{/if}
		</div>
	</a>
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

	h2 {
		color: var(--white);
		margin: 0;
		font-size: 1.1em;
	}

	.card-link {
		display: block;
		border-radius: 4px;
		overflow: hidden;
	}

	.card-link:hover {
		transform: scale(1.1);
		opacity: 1;
	}

	.card-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0;
		padding-block-start: 0.5rem;
		transition: opacity 0.4s ease-out;
	}

	.card-content.active {
		opacity: 1;
	}

	.card-link img {
		width: 100%;
		height: auto;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		border-radius: 4px;
		transition: all 0.5s;
	}

	.badges {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.badge {
		color: var(--white);
		display: inline-block;
		padding: 0.2rem 0.3rem;
		border-radius: 0.25rem;
		font-size: 0.6em;
		font-weight: 600;
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

	@media (max-width: 600px) {
		.card-link {
			transform: scale(0.9);
		}

		.card.active > .card-link {
			transform: scale(1.04);
			opacity: 1;
		}
	}
</style>
