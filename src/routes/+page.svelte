<script>
  let { data } = $props();

  const persons = data.persons;
</script>

{#each persons as person}
  <article class="person-card">
    <h2>{person.name}</h2>
    <p>{person.residency}</p>

    {#if person.mugshot}
      <picture>
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
  .masked-image {
    clip-path: polygon(7% 4%, 76% 15%, 83% 41%, 68% 91%, 11% 98%, 4% 64%);
  }
</style>
