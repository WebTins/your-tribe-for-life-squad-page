<script>
	import favicon from '$lib/assets/favicon.svg'

	let { children } = $props()
</script>

<svelte:head>
	<title>2G Squadpage</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}