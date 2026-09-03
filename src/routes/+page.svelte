<script>
  let { data } = $props();

  const persons = data.persons;
</script>

{#each persons as person}
  <article class="person-card">
    <h2>{person.name}</h2>
    <p>{person.residency}</p>

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
        src="/assets/person-placeholder.png"
        alt="Geen afbeelding beschikbaar"
      />
    {/if}
  </article>
{/each}

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
  }

  p {
    font-family: "Poppins";
    font-size: 1rem;
  }

  .mugshot {
    display: block;
    width: 450px;
    height: 400px;
  }

  .masked-image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    clip-path: polygon(24% 4%, 71% 14%, 78% 47%, 72% 84%, 24% 89%, 17% 64%);
  }
</style>
