<script>
	import BackButton from '$lib/components/BackButton.svelte'
	import CountdownClock from '$lib/components/CountdownClock.svelte'

	let { data } = $props()

	const person = data.person
</script>

<main class="detail-page">
	<div class="clock-position">
		<CountdownClock />
	</div>

	<section class="person-detail">
		<div class="person">
			<h1>{person.name}</h1>

			{#if person.avatar}
				<img
					class="person-image"
					src={person.avatar}
					alt={person.name}
				/>
			{/if}
		</div>

		<div class="person-description">
			<p>{person.bio || 'Hier komt informatie over deze persoon.'}</p>
		</div>
	</section>

	<div class="back-button-position">
		<BackButton />
	</div>
</main>

<style>
	:global(:root) {
		--countdown-background: #000000;
		--countdown-text: #ffffff;
		--countdown-width: 400px;
	}

	.detail-page {
		position: relative;
		min-height: 100vh;
		padding: 2rem;
		box-sizing: border-box;

		.clock-position {
			position: absolute;
			top: 35px;
			right: 50px;
		}

		.person-detail {
			display: grid;
			grid-template-columns: 300px 1fr;
			align-items: center;
			gap: 80px;

			width: 100%;
			max-width: 950px;
			margin: 0 auto;
			padding-top: 150px;

			.person {
				h1 {
					margin: 0 0 20px;
					font-size: 1.8rem;
					font-weight: 500;
				}

				.person-image {
					width: 250px;
					height: 320px;
					object-fit: cover;
				}
			}

			.person-description {
				max-width: 400px;

				p {
					margin: 0;
					font-size: 1rem;
					line-height: 1.6;
				}
			}
		}

		.back-button-position {
			position: absolute;
			left: calc(50% + 400px);
			bottom: 200px;
			transform: translateX(-50%);
		}
	}
</style>