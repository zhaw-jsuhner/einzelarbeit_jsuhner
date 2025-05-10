<script>

  import ClubCard from "$lib/components/ClubCard.svelte";

  let {data} = $props();

  let clubs = data.clubs;
</script>

<h2 class="text-center">Clubs</h2>
<br>

<a href="/clubs/create" id="addButton" class="btn btn-primary flex-fill text-nowrap">
  + Add club
</a>


<div class="row">
  {#each clubs as club}
    <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <ClubCard club={club} />
    </div>
  {/each}
</div>
