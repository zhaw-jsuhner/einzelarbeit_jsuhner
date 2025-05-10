<script>
  let { player } = $props();

  let date = new Date(player.birthdate);
  let formattedBirthdate = `${date.getDate().toString().padStart(2, "0")}.${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;
</script>

<div class="container my-5">
  <div class="row justify-content-center">
    <div class=" d-flex justify-content-center">
      <div class="card league-card">
        <div class="position-relative d-inline-block mb-3">
          <img
            src={`https://flagcdn.com/w320/${player.nationality_code}.png`}
            alt="flag"
            class="flag-overlay rounded border shadow-sm"
          />
          <img
            src={player.image_url}
            alt={player.player_name}
            class="card-img-top player-card-img-top"
          />
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">{player.player_name}</h5>
          <ul class="list-unstyled mb-3">
            <li><strong>Birthdate:</strong> {formattedBirthdate}</li>
            <li><strong>Position:</strong> {player.position}</li>
            <li><strong>Club:</strong> {player.club_name}</li>
          </ul>
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
    padding: 0 !important;
  }

  .flag-overlay {
    width: 48px;
    height: 32px;
    position: absolute;
    top: 165px;
    left: 15px;
    background: white;
    padding: 2px;
  }

</style>
