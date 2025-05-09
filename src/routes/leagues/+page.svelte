<script>

  import LeagueCard from "$lib/components/LeagueCard.svelte";

  let {data} = $props();

  let leagues = data.leagues;
</script>

<h2 class="text-center">Leagues</h2>

<div class="row">
  {#each leagues as league}
    <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <LeagueCard league={league} />
    </div>
  {/each}
</div>
