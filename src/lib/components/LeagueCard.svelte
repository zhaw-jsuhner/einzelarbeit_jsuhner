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
          <h5 class="card-title"><a href={"/leagues/" + league._id}>{league.league_name}</a></h5>
        </div>
      </div>
    </div>
  </div>
</div>
