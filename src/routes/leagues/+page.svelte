<script>
  import LeagueCard from "$lib/components/LeagueCard.svelte";

  let { data } = $props();
  let leagues = data.leagues;
  let countries = data.countries;

  let checked = $state(false);
  let selectedCountry = $state();
</script>

<h2 class="text-center">Leagues {selectedCountry}</h2>

<div class="container mb-4">
  <div class="row align-items-center g-2 filterBar">
    <!-- Country-Dropdown -->
    <div class="col-auto">
      <select class="form-select" bind:value={selectedCountry}>
        <option value="">All Countries</option>
        {#each countries as country}
          <option value={country}>{country}</option>
        {/each}
      </select>
    </div>
    <!-- Checkbox for Top 5-->
    <div class="col-auto">
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="top5Check"
          bind:checked
        />
        <label class="form-check-label" for="top5Check">
          Show only Top 5 Leagues
        </label>
      </div>
    </div>
  </div>
</div>

<a
  href="/leagues/create"
  id="addButton"
  class="btn btn-primary flex-fill text-nowrap"
>
  + Add league
</a>

<div class="row">
  {#each leagues as league}
    {#if (selectedCountry === "" || league.league_country === selectedCountry) && (!checked || league.is_top5)}
      <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
        <LeagueCard {league} />
      </div>
    {/if}
  {/each}
</div>
