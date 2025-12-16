<script lang="ts">
	interface Props {
		name: string;
		class?: string;
	}

	let { name, class: className = '' }: Props = $props();
</script>

<em class={className}>
	<svg class="icon" role="img">
		<use href="#{name}"></use>
	</svg>
</em>

<style>
	em {
		font-style: normal;
		display: inline-flex;
		align-items: center;
	}

	.icon {
		width: 1em;
		height: 1em;
		fill: currentColor;
	}
</style>
