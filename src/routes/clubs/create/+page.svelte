<script>
  let { form, data } = $props();
  let leagues = data.leagues;
  leagues.sort((a, b) => a.league_name.localeCompare(b.league_name));
</script>

<div class="container mt-5">
  <div class="mb-4">
    <a href="/clubs" class="btn btn-outline-secondary"> ← Back </a>
  </div>

  <h1 class="mb-4">Add a club</h1>

  {#if form?.success}
    <div class="alert alert-success" role="alert">Club created</div>
  {/if}

  <form method="POST" action="?/create">
    <div class="mb-3">
      <label for="club_name" class="form-label">Club name</label>
      <input name="club_name" type="text" class="form-control" required />
    </div>

    <div class="mb-3">
      <label for="year_founded" class="form-label">Year founded</label>
      <input name="year_founded" type="number" class="form-control" required />
    </div>

    <label for="league_id" class="form-label">League</label>
    <select name="league_id" class="form-select" required>
      <option selected disabled>Select a league</option>
      {#each leagues as league}
        <option value={league._id}>{league.league_name}</option>
      {/each}
    </select>
    <br />

    <button type="submit" class="btn btn-primary"> Add Club </button>
  </form>
</div>
