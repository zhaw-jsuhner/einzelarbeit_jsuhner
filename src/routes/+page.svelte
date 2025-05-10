<script>
    import PlayerCard from "$lib/components/PlayerCard.svelte";

    let { data } = $props();

    let players = data.players;
    let newestPlayers = players.slice(-3); // Get the last 3
</script>

<header class="bg-dark text-white py-5">
    <div class="container text-center">
        <h1 class="display-4 fw-bold">Discover Football’s Rising Stars</h1>
        <br>
        <br>
        <p class="lead">
            Your central hub for discovering football talent across the globe. This platform gives you access to an ever-growing collection of leagues, clubs, and players — all structured and visually presented for football enthusiasts, analysts, and scouts.
        </p>
    </div>
</header>

<section class="py-5 bg-light">
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <div class="mb-3">
              <i class="bi bi-globe2 display-5 text-primary"></i>
            </div>
            <h5 class="card-title">🌍 Create & Explore Leagues</h5>
            <p class="card-text">
              From Europe’s Top 5 leagues to emerging competitions, you can browse or create leagues. Each includes country, tier level, and connected clubs.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <div class="mb-3">
              <i class="bi bi-shield-check display-5 text-success"></i>
            </div>
            <h5 class="card-title">🏟️ Manage Clubs</h5>
            <p class="card-text">
              Clubs are linked to their leagues and can include real or fictional teams. Upload logos, view players, and maintain an organized structure.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <div class="mb-3">
              <i class="bi bi-person-bounding-box display-5 text-warning"></i>
            </div>
            <h5 class="card-title">🧑‍💼 Player Profiles</h5>
            <p class="card-text">
              View or add players with key stats like nationality, club, birthdate, and position. Each profile features national flags and player photos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Newest Players Section -->
<section id="new-players" class="py-5">
    <div class="container py-5">
        <h2 class="text-center mb-4">Newest Created Players</h2>
        <div class="row justify-content-center g-4">
            <div class="row">
                {#each newestPlayers as player}
                    <div
                        class="col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center"
                    >
                        <PlayerCard {player} />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
header {
  position: relative;
  z-index: 1;
  color: white;
  height: 400px;
}

header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/stadium.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.7; 
  z-index: -1;
}

</style>