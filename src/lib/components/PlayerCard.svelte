<script>
  let { player } = $props();
</script>

<div class="container my-5">
  <div class="row justify-content-center">
    <div class=" d-flex justify-content-center">
      <div class="card league-card">
        <img
          class="card-img-top player-card-img-top"
          src={player.image_url}
          alt={player.player_name}
        />       
        <div class="card-body text-center">
          <h5 class="card-title">{player.player_name}</h5>

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

  .player-card-img-top {
    padding: 0 !important
  }

</style>
