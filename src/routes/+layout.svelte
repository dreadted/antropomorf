<script lang="ts">
	import '../app.css';
	import icons from '$lib/assets/icons.svg?raw';
	import { fullTitle, siteDescription } from '$lib/siteMetadata';

	let { children } = $props();
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={siteDescription} />
</svelte:head>

{@html icons}
{@render children()}
