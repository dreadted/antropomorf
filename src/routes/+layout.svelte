<script lang="ts">
	import '../app.css';
	import icons from '$lib/assets/icons.svg?raw';

	let { children } = $props();
</script>

{@html icons}
{@render children()}
