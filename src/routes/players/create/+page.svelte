<script>
  let { form, data } = $props();
  let clubs = data.clubs;
  console.log(form);
</script>

<div class="container mt-5">
  <div class="mb-4">
    <a href="/players" class="btn btn-outline-secondary"> ← Back </a>
  </div>

  <h1 class="mb-4">Add a player</h1>

  {#if form?.success}
    <div class="alert alert-success" role="alert">Player created</div>
  {/if}

  <form method="POST" action="?/create">
    <div class="mb-3">
      <label for="player_name" class="form-label">Player name</label>
      <input name="player_name" type="text" class="form-control" required />
    </div>

    <div class="mb-3">
      <label for="birthdate" class="form-label">Birthdate</label>
      <input name="birthdate" type="date" class="form-control" required />
    </div>

    <div class="mb-3">
      <label for="nationality" class="form-label">Nationality (Country)</label>
      <input name="nationality" type="text" class="form-control" required />
    </div>

    <div class="mb-3">
      <label for="position" class="form-label">Position</label>
      <input name="position" type="text" class="form-control" required />
    </div>

    <label for="club_id" class="form-label">Club</label>
    <select name="club_id" class="form-select" required>
      <option selected disabled>Select a club</option>
      {#each clubs as club}
        <option value={club._id}>{club.club_name}</option>
      {/each}
    </select>
    <br />
    <button type="submit" class="btn btn-primary"> Add Player </button>
  </form>
</div>
