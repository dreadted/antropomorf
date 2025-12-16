<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import icons from '../../static/icons.svg?raw';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@html icons}
{@render children()}
