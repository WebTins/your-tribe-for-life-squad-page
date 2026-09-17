<script>
  import CountdownClock from "$lib/components/CountdownClock.svelte";
  import { slugify } from "$lib/utils.js";
  import placeholder from "$lib/assets/person-placeholder.png";

  let { data } = $props();

  const persons = data.persons;
</script>

<CountdownClock isOverview={true} transitionName="countdown-clock" />

<section class="squadpage">
  {#each persons as person}
    <a class="person-card-wrapper" href="/{slugify(person.name)}">
      <article class="person-card">
        <div class="person-information">
          <h2>{person.name}</h2>
          <p>{person.residency}</p>
        </div>

        {#if person.mugshot}
          <picture class="mugshot">
            <source
              type="image/avif"
              srcset="https://fdnd.directus.app/assets/{person.mugshot}?fit=cover&format=avif&height=700&quality=80"
            />

            <source
              type="image/webp"
              srcset="https://fdnd.directus.app/assets/{person.mugshot}?fit=cover&format=webp&height=700&quality=80"
            />

            <img
              class="masked-image"
              src="https://fdnd.directus.app/assets/{person.mugshot}?height=700&quality=80"
              width={person.mugshot.width}
              height={person.mugshot.height}
              alt="Afbeelding van {person.name}"
            />
          </picture>
        {:else}
          <img
            class="masked-image placeholder"
            src={placeholder}
            alt="Geen afbeelding beschikbaar"
          />
          <!-- <p>Person is getting a coffee...</p> -->
        {/if}
      </article>
    </a>
  {/each}
</section>

<style>
  @font-face {
    font-family: "Just Me Again Down Here";
    src: url("src/lib/fonts/JustMeAgainDownHere-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Poppins";
    src: url("src/lib/fonts/Poppins-Medium.ttf") format("truetype");
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1.5;
  }

  h2 {
    font-family: "Just Me Again Down Here";
    font-weight: 400;
    font-size: 3rem;
    line-height: 1;
    text-transform: uppercase;
  }

  p {
    font-family: "Poppins";
    font-size: 1rem;
  }

  .squadpage {
    display: grid;
    grid-template-columns: 1fr;
    padding-left: 15px;
    padding-right: 15px;
    overflow: hidden;

    .person-card-wrapper {
      text-decoration: none;
      color: inherit;

      .person-card {
        display: flex;
        flex-direction: column;
        align-items: center;

        .person-information {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mugshot,
        .masked-image.placeholder {
          display: block;
          width: 450px;
          height: 400px;
        }

        .masked-image {
          width: 100%;
          height: 100%;
          object-fit: cover;

          transition: filter 0.3s ease;
          filter: grayscale(1);

          clip-path: polygon(
            24% 4%,
            71% 14%,
            78% 47%,
            72% 84%,
            24% 89%,
            17% 64%
          );
        }
      }
    }

    .person-card-wrapper:nth-child(4n + 2) .masked-image,
    .person-card-wrapper:nth-child(4n + 4) .masked-image {
      clip-path: polygon(76% 4%, 29% 14%, 22% 47%, 28% 84%, 76% 89%, 83% 64%);

      transform: scaleX(-1);
    }

    .person-card-wrapper:hover .mugshot .masked-image,
    .person-card-wrapper:focus .mugshot .masked-image {
      filter: grayscale(0);
    }
  }

  @media (min-width: 576px) {
    .squadpage {
      grid-template-columns: 50% 50%;
    }

    .person-card-wrapper:nth-child(4n + 2),
    .person-card-wrapper:nth-child(4n + 4) {
      transform: translateY(200px);
    }
  }

  @media (min-width: 1200px) {
    .squadpage {
      grid-template-columns: 25% 25% 25% 25%;
    }

    .person-card-wrapper:nth-child(4n + 2),
    .person-card-wrapper:nth-child(4n + 4) {
      transform: translateY(200px);
    }
  }
</style>
