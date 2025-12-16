<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';

	let decodedEmail = $state('');
	let decodedHref = $state('');

	onMount(() => {
		// Obfuscated email data
		const ml = 'ehcFir.3ofpCkm%ls4EA0jt-2nDa';
		const mi =
			'>7;K>HD1509>7J>HH=K4?F8>7C10E>ADKIF58:8=8596@0>HH>HD2?K@@>7J>HH=K4?G?4I<>HH>7B10E>ADKIF58:8=8596@0>7;>H3K>7B';
		let o = '';

		for (let j = 0, l = mi.length; j < l; j++) {
			o += ml.charAt(mi.charCodeAt(j) - 48);
		}

		const decoded = decodeURIComponent(o);
		const parser = new DOMParser();
		const doc = parser.parseFromString(decoded, 'text/html');
		const anchor = doc.querySelector('a');

		if (anchor) {
			decodedEmail = anchor.textContent || '';
			decodedHref = anchor.getAttribute('href') || '';
		}
	});
</script>

{#if decodedEmail && decodedHref}
	<a href={decodedHref}>
		<Icon name="tf-far-envelope-open" />
		{decodedEmail}
	</a>
{/if}
