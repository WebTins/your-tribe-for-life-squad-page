<script>
	import favicon from '$lib/assets/favicon.svg'

	let { children } = $props();

	import { onNavigate } from '$app/navigation'

	onNavigate((navigation) => {
	if (!document.startViewTransition) return

	return new Promise((resolve) => {
		const transition = document.startViewTransition(async () => {
			resolve()
			await navigation.complete
		})
	})
})
</script>

<svelte:head>
	<title>2G Squadpage</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}