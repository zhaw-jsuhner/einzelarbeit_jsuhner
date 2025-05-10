<script>
  let { form } = $props();
</script>


<div class="container mt-5">
  <!-- Zurück-Link -->
  <div class="mb-4">
    <a href="/leagues" class="btn btn-outline-secondary"> ← Back </a>
  </div>

  <!-- Überschrift -->
  <h1 class="mb-4">Add a league</h1>

  {#if form?.success}
    <div class="alert alert-success" role="alert">League created</div>
  {/if}

  <!-- Formular -->
  <form method="POST" action="?/create">
    <div class="mb-3">
      <label for="league_name" class="form-label">League name</label>
      <input name="league_name" type="text" class="form-control" required />
    </div>

    <div class="mb-3">
      <label for="league_country" class="form-label">League country</label>
      <input name="league_country" type="text" class="form-control" required />
    </div>

    <button type="submit" class="btn btn-primary "> Add League </button>
  </form>
</div>

