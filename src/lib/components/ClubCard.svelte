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
