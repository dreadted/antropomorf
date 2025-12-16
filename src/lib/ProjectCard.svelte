<script lang="ts">
	export let title: string;
	export let image: string;
	export let bullets: string[];
	export let link: string;
</script>

<article class="card">
	<a href={link} target="_blank"> <img src={image} alt={title} /></a>
	<div class="card-content">
		<a href={link} target="_blank"><h2>{title}</h2></a>

		<ul>
			{#each bullets as bullet}
				<li>{bullet}</li>
			{/each}
		</ul>
	</div>
</article>

<style>
	.card {
		background: linear-gradient(to bottom, var(--black), var(--dark));
		color: var(--medium);
		font-family: 'Source Code Pro';
		font-size: calc(var(--font-size) / 1.6);
		border-radius: 8px;
	}

	.card-content {
		padding: 1rem;
	}

	.card a {
		color: var(--secondary);
		text-decoration: none;
	}

	img {
		width: 100%;
		border-radius: 4px;
	}
</style>
