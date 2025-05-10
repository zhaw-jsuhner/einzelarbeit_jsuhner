<script>
  let { club } = $props();
</script>

<div class="container my-5">
  <div class="row justify-content-center">
    <div class=" d-flex justify-content-center">
      <div class="card league-card">
        <img
          class="card-img-top"
          src={club.badge_url}
          alt={club.club_name}
        />       
        <div class="card-body text-center">
          <h5 class="card-title"><a href={"/clubs/" + club._id}>{club.club_name}</a></h5>

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
