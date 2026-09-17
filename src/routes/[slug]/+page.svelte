<script>
	import BackButton from '$lib/components/BackButton.svelte'
	import CountdownClock from '$lib/components/CountdownClock.svelte'

	let { data } = $props()

	const person = data.person
	const personSlug = data.slug

	const mugshotId =
		typeof person.mugshot === 'object'
			? person.mugshot?.id
			: person.mugshot
</script>

<main class="detail-page">
	<div class="countdown-position">
		<CountdownClock isOverview={true} transitionName="countdown-clock" />
	</div>

	<section class="person-detail">
		<div class="person">
			<h1 style="view-transition-name: name-{person.id};">{person.name}</h1>

			{#if mugshotId}
				<picture class="person-picture">
					<source
						type="image/avif"
						srcset={`https://fdnd.directus.app/assets/${mugshotId}?fit=cover&format=avif&height=700&quality=80`}
					/>

					<source
						type="image/webp"
						srcset={`https://fdnd.directus.app/assets/${mugshotId}?fit=cover&format=webp&height=700&quality=80`}
					/>

					<img
						class="person-image"
						src={`https://fdnd.directus.app/assets/${mugshotId}?height=700&quality=80`}
						alt={`Afbeelding van ${person.name}`}
						style="view-transition-name: transfer-{person.id};"
					/>
				</picture>
			{:else}
				<p>Person is getting a coffee...</p>
			{/if}
		</div>

		<div class="person-description">
			<p>
				{person.bio || 'This CoffeeTime member is still writing their bio.'}
			</p>
		</div>
	</section>

	<div class="button-wrapper">
		<BackButton />
	</div>
</main>

<style>
	@media (prefers-reduced-motion: no-preference) {
		:root {
			view-transition-name: none;
		}
	}

	.detail-page {
		--person-image-width: 15rem;
		--person-image-height: 19rem;
		--content-width: 55rem;

		display: grid;
		grid-template-rows: auto 1fr auto;

		height: 100vh;
		padding: 2rem;
		box-sizing: border-box;

		.countdown-position {
			display: flex;
			justify-content: flex-end;

			width: 100%;
			margin-bottom: 0;
		}

		.person-detail {
			display: grid;
			grid-template-columns: 1fr;
			align-self: center;
			gap: 3rem;

			width: 100%;
			max-width: var(--content-width);
			margin: 0 auto;

			.person {
				h1 {
					margin: 0 0 1rem;

					font-family: "Just Me Again Down Here";
					font-size: 2rem;
					font-weight: 400;
					line-height: 1;
					text-transform: uppercase;
				}

				.person-picture {
					display: block;

					width: 100%;
					max-width: var(--person-image-width);
					height: var(--person-image-height);

					.person-image {
						display: block;

						width: 100%;
						height: 100%;
						object-fit: cover;

						filter: grayscale(1);
						transition: filter 0.3s ease;

						clip-path: polygon(
							12% 0,
							88% 6%,
							100% 38%,
							93% 92%,
							10% 100%,
							0 55%
						);
					}

					&:hover .person-image {
						filter: grayscale(0);
					}
				}
			}

			.person-description {
				max-width: 32rem;

				p {
					margin: 0;

					font-family: "Poppins";
					font-size: 1rem;
					line-height: 1.6;
				}
			}
		}

		.button-wrapper {
			display: flex;
			justify-content: center;

			width: 100%;
			margin-top: 1rem;
		}
	}

	@media (min-width: 768px) {
		.detail-page {
			.countdown-position {
				margin-left: auto;
				width: 24rem;
			}

			.person-detail {
				grid-template-columns: 40% 60%;
				align-items: center;
				gap: 5rem;
			}
		}
	}
</style>