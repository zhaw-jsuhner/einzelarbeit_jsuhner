<script>
  import ClubCard from "$lib/components/ClubCard.svelte";

  let { data } = $props();
  console.log({ data });

  let league = data.league;
  let clubs = data.clubs;
</script>

<h1 class="display-4 mb-4 justify-content-center">{league.league_name}</h1>

<div class="container mb-5">
  <div class="row">
    <div class="col-lg-6 mb-4">
      <img
        src={league.logo_url}
        alt={league.league_name}
        class="img-fluid mb-3"
        style="max-width: 300px;"
      />
      <ul class="list-unstyled">
        <li><strong>Land:</strong> {league.league_country}</li>
        <li><strong>Top 5:</strong> {league.is_top5}</li>
      </ul>
    </div>
    <div class="col-lg-6">
      <h2 class="h5 mb-3">Clubs</h2>
      <div class="row">
        {#if clubs.length > 0}
          {#each clubs as club}
            <div class="col-12 col-md-6 mb-4 d-flex justify-content-center">
              <ClubCard {club} />
            </div>
          {/each}
        {:else}
            <p>Currently there are no clubs created in this league.</p>
        {/if}
      </div>
    </div>
  </div>
</div>
