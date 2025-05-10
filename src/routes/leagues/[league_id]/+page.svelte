<script>
  import ClubCard from "$lib/components/ClubCard.svelte";
  import PlayerCard from "$lib/components/PlayerCard.svelte";

  let { data } = $props();
  console.log({ data });

  let league = data.league;
  let clubs = data.clubs;
  let players = data.players;
</script>

<h1 class="display-4 mb-4 justify-content-center">{league.league_name}</h1>
<br>

<div class="container mb-5">
  <div class="row">
    <!-- Logo and Info -->
    <div class="col-lg-4 mb-4">
      <img
        src={league.logo_url}
        alt={league.league_name}
        class="img-fluid mb-3"
        style="max-width: 300px;"
      />
      <ul class="list-unstyled">
        <li><strong>Country:</strong> {league.league_country}</li>
        <li><strong>Is a top 5 league: </strong> {league.is_top5}</li>
      </ul>
    </div>

    <!-- Clubs and Players -->
    <div class="col-lg-8">
      <!-- Clubs -->
      <h2 class="h5 mb-3">Clubs</h2>
      <div class="row">
        {#if clubs.length > 0}
          {#each clubs as club}
             <div class="col-sm-6 col-md-4 d-flex justify-content-center mb-4">
              <ClubCard {club} />
            </div>
          {/each}
        {:else}
          <p>Currently there are no clubs created in this league.</p>
        {/if}
      </div>
      <!-- Players -->
      <h2 class="h5 mt-4 mb-3">Players</h2>
      <div class="row">
        {#if players.length > 0}
          {#each players as player}
            <div class="col-sm-6 col-md-4 d-flex justify-content-center mb-4">
              <PlayerCard {player} />
            </div>
          {/each}
        {:else}
          <p>Currently there are no players created in this league.</p>
        {/if}
      </div>
    </div>
  </div>
</div>
