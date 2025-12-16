<script lang="ts">
	import MailtoLink from './MailtoLink.svelte';
</script>

<section id="contact">
	<MailtoLink />
</section>

<style>
	#contact {
		height: 30dvh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#contact :global(a) {
		animation: textAnimation 6s ease-in-out 1 forwards;
	}
</style>
