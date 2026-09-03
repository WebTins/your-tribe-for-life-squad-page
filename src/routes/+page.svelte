<script>
  let { data } = $props();

  const persons = data.persons;
</script>

<section class="squadpage">
  {#each persons as person}
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
          src="/assets/person-placeholder.png"
          alt="Geen afbeelding beschikbaar"
        />
      {/if}
    </article>
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .person-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .person-card:nth-child(4n + 2),
  .person-card:nth-child(4n + 4) {
    transform: translateY(200px);
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

  .person-card:nth-child(4n + 2) .masked-image,
  .person-card:nth-child(4n + 4) .masked-image {
    clip-path: polygon(76% 4%, 29% 14%, 22% 47%, 28% 84%, 76% 89%, 83% 64%);

    transform: scaleX(-1);
  }

  .person-information {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
</style>
