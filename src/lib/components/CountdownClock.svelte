<script>
	import { onMount } from 'svelte'
	import logo from '$lib/assets/2G.png'

	let hours = $state(0)
	let minutes = $state(0)
	let seconds = $state(0)
	let { isOverview = false, transitionName = 'countdown-clock' } = $props()

	function updateCountdown() {
		const now = new Date()
		const coffeeTime = new Date()

		coffeeTime.setHours(15, 15, 0, 0)

		// Use tomorrow when coffee time has passed
		if (now >= coffeeTime) {
			coffeeTime.setDate(coffeeTime.getDate() + 1)
		}

		const difference = coffeeTime - now

		// Change the time left into hours, minutes and seconds
		hours = Math.floor(difference / 1000 / 60 / 60)
		minutes = Math.floor((difference / 1000 / 60) % 60)
		seconds = Math.floor((difference / 1000) % 60)
	}

	onMount(() => {
		updateCountdown()

		// Update the countdown every second
		const timer = setInterval(updateCountdown, 1000)

		return () => {
			clearInterval(timer)
		}
	})
</script>

<div class="countdown-wrapper" style="view-transition-name: {transitionName};">
	<header class="countdown-clock">
		{#if isOverview}
			<h1 class="squad-title">
				<a href="/" class="squad-info">
					<img src={logo} alt="2G" />
					<span>Squadpage</span>
				</a>
			</h1>
		{:else}
			<a href="/" class="squad-info">
				<img src={logo} alt="2G Squadpage" />
				<span>Squadpage</span>
			</a>
		{/if}

		<div class="coffee-time">
			<time>
				{String(hours).padStart(2, '0')}:
				{String(minutes).padStart(2, '0')}:
				{String(seconds).padStart(2, '0')}
			</time>

			<p>left for coffeetime</p>
		</div>
	</header>
</div>

<style>
	.countdown-wrapper {
		--countdown-background: #000000;
		--countdown-text: #ffffff;
		--countdown-width: 31rem;

		position: sticky;
		top: 1.25rem;
		z-index: 10;

		display: flex;
		justify-content: center;

		width: 100%;

		.countdown-clock {
			display: flex;
			align-items: center;
			justify-content: space-between;

			width: 100%;
			max-width: var(--countdown-width);
			min-height: 8rem;
			padding: 1.5rem 3rem;
			box-sizing: border-box;

			color: var(--countdown-text);
			background-color: var(--countdown-background);

			/* Shape based on the Figma design */
			clip-path: polygon(
				2% 0,
				22% 7%,
				52% 2%,
				76% 8%,
				98% 0,
				97% 90%,
				75% 84%,
				52% 94%,
				25% 88%,
				0 100%
			);

			.squad-title {
				margin: 0;
				font-size: inherit;
				line-height: inherit;
			}

			.squad-info {
				display: flex;
				flex-direction: column;
				align-items: center;

				color: var(--countdown-text);
				text-decoration: none;

				img {
					display: block;
					width: 4.5rem;
					height: auto;
				}

				span {
					margin-top: -0.5rem;

					font-family: "Poppins";
					font-size: 1rem;
					font-weight: 400;
					line-height: 1.5;
				}
			}

			.coffee-time {
				text-align: center;

				time {
					display: block;

					font-family: "Just Me Again Down Here";
					font-size: 2.5rem;
					font-weight: 400;
					line-height: 1;
				}

				p {
					margin: 0.25rem 0 0;

					font-family: "Poppins";
					font-size: 1rem;
					line-height: 1.5;
				}
			}
		}
	}
</style>