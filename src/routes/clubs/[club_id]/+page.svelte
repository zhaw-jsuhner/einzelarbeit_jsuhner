<script>
  import PlayerCard from "$lib/components/PlayerCard.svelte";

  let { data } = $props();
  console.log({ data });

  let league = data.league;
  let club = data.club;
  let players = data.players;
</script>

<h1 class="display-4 mb-4 justify-content-center">{club.club_name}</h1>
<br>

 <div class="container mb-5">
  <div class="row">
    
    <div class="col-lg-4 mb-4">
      <img
        src={club.badge_url}
        alt={club.club_name}
        class="img-fluid mb-3"
        style="max-height: 300px;"
      />
      <ul class="list-unstyled">
        <li><strong>League:</strong> {league.league_name}</li>
        <li><strong>Founded in year:</strong> {club.year_founded}</li>
      </ul>
    </div>

    
    <div class="col-lg-8">
      
      <h2 class="h5 mt-4 mb-3">Players</h2>
      <div class="row">
        {#if players.length > 0}
          {#each players as player}
            <div class="col-sm-6 col-md-4 d-flex justify-content-center mb-4">
              <PlayerCard {player} {club}/>
            </div>
          {/each}
        {:else}
          <p>Currently there are no players created in this club.</p>
        {/if}
      </div>
    </div>
  </div>
</div> 
