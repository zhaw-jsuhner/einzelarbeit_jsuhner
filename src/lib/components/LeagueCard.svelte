<script>
  let { league } = $props();
</script>

<div class="container my-5">
  <div class="row justify-content-center">
    <div class=" d-flex justify-content-center">
      <div class="card league-card">
        <img
          class="card-img-top"
          src={league.logo_url}
          alt={league.league_name}
        />
        <div class="card-body text-center">
          <h5 class="card-title">{league.league_name}</h5>

          <!-- Horizontal buttons -->
          <div class="d-flex justify-content-center gap-2 mt-3">
            <a
              href=""
              class="btn btn-primary flex-fill text-nowrap"
            >
              Clubs
            </a>
            <a
              href=""
              class="btn btn-primary flex-fill text-nowrap"
            >
              Players
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .league-card {
    width: 100%;
    max-width: 280px;
    margin-top: 1rem auto;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.2s ease-in-out,
      box-shadow 0.2s;
  }

</style>
