<script>
	import CountdownClock from '$lib/components/CountdownClock.svelte'

	let { data } = $props()

	const persons = data.persons
</script>

<CountdownClock />

<h1>Welcome to SvelteKit</h1>

<p>
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
	documentation
</p>

{#each persons as person}
	{person.name}<br />
{/each}

<style>
	:global(:root) {
		--countdown-background: #000000;
		--countdown-text: #ffffff;
		--countdown-width: 400px;
	}
</style>