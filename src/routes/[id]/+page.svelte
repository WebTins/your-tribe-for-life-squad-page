<script>
	import BackButton from '$lib/components/BackButton.svelte'
	import CountdownClock from '$lib/components/CountdownClock.svelte'

	let { data } = $props()

	// Get the image ID when Directus returns either an object or a string
	const person = data.person
	const mugshotId =
		typeof person.mugshot === 'object'
			? person.mugshot.id
			: person.mugshot
</script>

<main class="detail-page">
	<div class="clock-position">
		<CountdownClock />
	</div>

	<section class="person-detail">
		<div class="person-information">
			<h1>{person.name}</h1>

			{#if mugshotId}
				<picture class="person-picture">
					<img
						class="person-image"
						src={`https://fdnd.directus.app/assets/${mugshotId}`}
						width="250"
						height="320"
						alt={`Afbeelding van ${person.name}`}
					/>
				</picture>
			{:else}
				<p>Geen afbeelding beschikbaar.</p>
			{/if}
		</div>

		<div class="person-description">
			<p>{person.bio || 'Hier komt informatie over deze persoon.'}</p>
		</div>
	</section>

	<div class="button-wrapper">
		<BackButton />
	</div>
</main>

<style>
	:global(:root) {
		--detail-content-width: 950px;
		--person-image-width: 250px;
		--person-image-height: 320px;
		--detail-page-spacing: 2rem;
		--detail-section-gap: 80px;
	}

	.detail-page {
		position: relative;
		min-height: 100vh;
		padding: var(--detail-page-spacing);
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
			gap: var(--detail-section-gap);
			width: 100%;
			max-width: var(--detail-content-width);
			margin: 0 auto;
			padding-top: 150px;

			.person-information {
				h1 {
					margin: 0 0 20px;
					font-size: 1.8rem;
					font-weight: 500;
				}

				.person-picture {
					display: block;
					width: var(--person-image-width);
					height: var(--person-image-height);

					.person-image {
						display: block;
						width: 100%;
						height: 100%;
						object-fit: cover;
						filter: grayscale(1);
						transition: filter 0.3s ease;

						clip-path: polygon(
							24% 4%,
							71% 14%,
							78% 47%,
							72% 84%,
							24% 89%,
							17% 64%
						);
					}

					.person-image:hover {
						filter: grayscale(0);
					}
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

		.button-wrapper {
			position: absolute;
			left: calc(50% + 400px);
			bottom: 200px;
			transform: translateX(-50%);
		}
	}

	@media (max-width: 700px) {
		.detail-page {
			padding: 1rem;

			.clock-position {
				position: static;
				display: flex;
				justify-content: center;
			}

			.person-detail {
				grid-template-columns: 1fr;
				gap: 40px;
				padding-top: 60px;

				.person-information {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.person-description {
					margin: 0 auto;
				}
			}

			.button-wrapper {
				position: static;
				margin-top: 50px;
				transform: none;
			}
		}
	}
</style>