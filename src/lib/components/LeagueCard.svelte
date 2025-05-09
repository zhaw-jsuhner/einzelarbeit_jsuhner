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
