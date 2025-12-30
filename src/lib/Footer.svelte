<script lang="ts">
	import { onMount } from 'svelte';
	import MailtoLink from './MailtoLink.svelte';

	let footerEl: HTMLElement;
	const year = new Date().getFullYear();

	onMount(() => {
		if (!footerEl) return;

		// Get the computed styles from the element itself
		const computedStyles = getComputedStyle(footerEl);
		const firstColor = computedStyles.getPropertyValue('--primary').trim();
		const secondColor = computedStyles.getPropertyValue('--primary-2').trim();

		console.log(
			`%c ${window.location.hostname} %c v${import.meta.env.VITE_PACKAGE_VERSION} `,
			`background-color: ${firstColor}80; color: #fff; border-radius: 3px 0 0 3px;`,
			`background-color: ${secondColor}; color: #fff; border-radius: 0 3px 3px 0;`
		);
	});
</script>

<footer id="footer" bind:this={footerEl}>
	<span><MailtoLink /></span>
	<span>v{import.meta.env.VITE_PACKAGE_VERSION} &copy; {year} {import.meta.env.VITE_AUTHOR}</span>
</footer>

<style>
	#footer {
		display: flex;
		justify-content: space-between;
		align-items: center;

		margin: 2rem 0 0;
		color: var(--medium);
		font-family: 'Source Code Pro';
		font-weight: 500;
		font-size: calc(var(--font-size) / 1.6);
	}

	@media (max-width: 600px) {
		#footer {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
			margin: 4rem 0 2rem;
		}

		#footer span:first-child {
			margin-left: -0.8rem;
		}
	}
</style>
