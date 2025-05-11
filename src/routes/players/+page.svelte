<script>
  import PlayerCard from "$lib/components/PlayerCard.svelte";

  let { data } = $props();

  let players = data.players;
  let clubs = data.clubs;

  let selectedClub = $state();
  let selectedNationality = $state();
  let selectedPosition = $state();

  // Extract unique, sorted nationalities
  let nationalities = Array.from(
    new Set(players.map((player) => player.nationality).filter(Boolean))
  ).sort();

  // Extract unique, sorted positions
  let positions = Array.from(
    new Set(players.map((player) => player.position).filter(Boolean))
  ).sort();

  let minAge;
  let maxAge;

  const today = new Date();
  players = players.map((player) => {
    const birth = new Date(player.birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return { ...player, age };
  });

  // Extract min/max from updated players
  const allAges = players.map((p) => p.age);
  minAge = Math.min(...allAges);
  maxAge = Math.max(...allAges);

  let selectedMaxAge = $state(maxAge);

  function resetFilters() {
    selectedClub = "";
    selectedNationality = "";
    selectedPosition = "";
    selectedMaxAge = maxAge;
  }
</script>

<h2 class="text-center">{selectedClub} Players</h2>
<br />

<div class="container mb-4">
  <div class="row align-items-center g-2 filterBar">
    <!-- Club-Dropdown -->
    <div class="col-auto">
      <select class="form-select" bind:value={selectedClub}>
        <option value="">All Clubs</option>
        {#each clubs as club}
          <option value={club.club_name}>{club.club_name}</option>
        {/each}
      </select>
    </div>
    <!-- Nationality-Dropdown -->
    <div class="col-auto">
      <select class="form-select" bind:value={selectedNationality}>
        <option value="">All Nationalities</option>
        {#each nationalities as nationality}
          <option value={nationality}>{nationality}</option>
        {/each}
      </select>
    </div>
    <!-- Position-Dropdown -->
    <div class="col-auto">
      <select class="form-select" bind:value={selectedPosition}>
        <option value="">All Positions</option>
        {#each positions as position}
          <option value={position}>{position}</option>
        {/each}
      </select>
    </div>
    <!-- Position-Dropdown -->
    <div class="col-auto">
      <label for="maxAgeRange" class="form-label">
        Max. Age: <strong>{selectedMaxAge}</strong> years
      </label>
      <input
        type="range"
        class="form-range"
        min={minAge}
        max={maxAge}
        step="1"
        id="maxAgeRange"
        bind:value={selectedMaxAge}
      />
    </div>
    <div class="col-auto">
      <button class="btn btn-outline-secondary" onclick={resetFilters}>
        Reset all filters
      </button>
    </div>
  </div>
</div>

<a href="/players/create" id="addButton" class="btn btn-primary flex-fill text-nowrap">
  + Add player
</a>

<div class="row">
  {#each players as player}
    {#if (selectedClub === "" || player.club_name === selectedClub) && (selectedNationality === "" || player.nationality === selectedNationality) && (selectedPosition === "" || player.position === selectedPosition) && (isNaN(selectedMaxAge) || player.age <= selectedMaxAge)}
      <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
        <PlayerCard {player} />
      </div>
    {/if}
  {/each}
</div>
