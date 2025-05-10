<script>
let { form } = $props();
console.log(form);

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

    <p>Add league dropdown</p>
    <!-- <label for="club" class="form-label">Club</label>
    <select id="club" class="form-select" required>
      <option selected disabled>Select a club</option>
      {#each clubs as club}
      <option value={club.id}>{club.name}</option>
    {/each}
    </select> -->

    <button type="submit" class="btn btn-primary"> Add Club </button>
  </form>
</div>
