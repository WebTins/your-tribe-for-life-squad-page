<script>
  import { page } from "$app/state";
  import BackButton from "$lib/components/BackButton.svelte";
  import Poppins from "$lib/assets/Poppins-Regular.ttf";
  import spilledCoffee from "$lib/assets/spilled-coffee.png";

  let alt = "spilled coffee";
</script>

<svelte:head>
  <title>ERROR: Page not found</title>
</svelte:head>

<main>
  <section class="top-content">
    <h1 class="error">{page.status}</h1>
    <img src={spilledCoffee} {alt} />
  </section>

  <section class="bottom-content">
    <h2 class="error-message">ERROR: PAGE NOT FOUND</h2>
    <p>
      We couldn't find the page you were looking for... maybe it's time for a
      coffee break?
    </p>
  </section>

  <div class="back-button-container">
    <BackButton />
  </div>
</main>

<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    --shade-accent: #4f4f4fc8;
  }

  .back-button-container {
    transition:
      0.4s ease-in-out,
      left 0.4s ease-in-out;
  }

  @media (min-width: 768px) {
    .back-button-container {
      position: absolute;
      bottom: 1em;
      left: 2em;
    }

    .bottom-content {
      position: absolute;
    }
  }

  @media (min-width: 1024px) {
    .back-button-container {
      left: 15%;
    }
  }

  @font-face {
    font-family: "Poppins";
    src: url("$lib/assets/Poppins-Regular.ttf") format("truetype");
  }

  @keyframes --coffee-spill {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.2;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes --rotate-animation {
    0% {
      rotate: -5deg;
    }
    50% {
      rotate: 5deg;
    }
    100% {
      rotate: -5deg;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  main {
    position: relative;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Poppins;
    overflow: hidden;

    @supports (animation-timeline: view()) {
      animation: fade-in 0.3s ease-in-out;
    }

    .top-content {
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      margin-top: 5em;

      width: 400px;
      height: 200px;

      @media (min-width: 768px) {
        bottom: 7em;
      }

      h1 {
        position: absolute;
        z-index: 1;
        font-size: 10em;
        animation-name: --rotate-animation;
        animation-duration: 3s;
        animation-iteration-count: infinite;
      }

      img {
        position: absolute;
        z-index: 1;
        right: 9%;
        width: 350px;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        rotate: 30deg;

        animation-name: --coffee-spill;
        animation-duration: 3s;
        animation-iteration-count: infinite;
      }
    }

    .bottom-content {
      display: flex;
      bottom: 1em;
      right: 1.5em;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 1em;
      transition: 0.4s ease-in-out;

      @media (min-width: 768px) {
        bottom: 2em;
      }

      @media (min-width: 1024px) {
        padding-right: 8rem;
      }

      h2 {
        font-size: 1.25em;
        margin-top: 5em;
      }

      p {
        color: var(--shade-accent);
        width: 35ch;
        font-size: 1em;
        font-weight: 600;

        @media (min-width: 768px) {
          width: 40ch;
          padding-bottom: 3rem;
        }
      }
    }
  }
</style>
