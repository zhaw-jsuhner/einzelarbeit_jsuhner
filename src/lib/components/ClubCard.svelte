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
          <h5 class="card-title">{club.club_name}</h5>


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

  .league-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  .card-img-top {
    object-fit: contain;
    height: 180px;
    background-color: #f8f9fa;
    padding: 1rem;
  }

  .card-title {
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .btn-primary {
    border-radius: 999px;
    padding: 0.5rem 1.25rem;
    display: block;
    width: fit-content;
    margin: 0 auto;
  }
</style>
