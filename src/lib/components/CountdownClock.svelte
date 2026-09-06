<script>
	import { onMount } from 'svelte'
	import logo from '$lib/assets/2G.png'

	let hours = $state(0)
	let minutes = $state(0)
	let seconds = $state(0)

	function updateCountdown() {
		const now = new Date()
		const coffeeTime = new Date()

		coffeeTime.setHours(15, 15, 0, 0)

		// If coffee time has passed, use tomorrow
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

<header class="countdown-wrapper">
	<section class="countdown-clock">
		<a href="/" class="squad-info">
			<img src={logo} alt="2G Squadpage logo">
		</a>

		<div class="coffee-time">
			<time>
				<!-- Add a zero when the number has one digit -->
				{String(hours).padStart(2, '0')}:
				{String(minutes).padStart(2, '0')}:
				{String(seconds).padStart(2, '0')}
			</time>

			<p>left for coffeetime</p>
		</div>
	</section>
</header>

<style>
	.countdown-wrapper {
		position: sticky;
		top: 20px;
		z-index: 10;

		display: flex;
		justify-content: center;
		width: 100%;
	}

	.countdown-clock {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: var(--countdown-width);
		padding: 20px 30px;
		color: var(--countdown-text);
		background-color: var(--countdown-background);

		/* Create the angled shape from my Figma design */
		clip-path: polygon(
			3% 0,
			100% 5%,
			97% 100%,
			0 92%
		);

		.squad-info {
			display: flex;
			align-items: center;
			justify-content: center;

			img {
				display: block;
				width: 70px;
				height: auto;
			}
		}

		.coffee-time {
			text-align: center;

			time {
				display: block;
				font-size: 32px;
				font-weight: bold;
			}

			p {
				margin: 0;
				font-size: 16px;
				line-height: 1.5;
			}
		}
	}
</style>