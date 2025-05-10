<script>

  import PlayerCard from "$lib/components/PlayerCard.svelte";

  let {data} = $props();

    let players = data.players;
    let clubs = data.clubs;
</script>

<h2 class="text-center">Players</h2>

<div class="row">
  {#each players as player}
    <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <PlayerCard {player}/>
    </div>
  {/each}
</div>
