<script>
  import "./styles.css";
  let { children } = $props();
  import { fade } from 'svelte/transition';
</script>

<nav 
  class="navbar navbar-expand-lg bg-body-tertiary bg-dark"
  data-bs-theme="dark"
>
  <div class="container-fluid" transition:fade>
    <a class="navbar-brand" href="/">Football Player Database</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/leagues"
            >Leagues</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/clubs"
            >Clubs</a
          >
        </li>
                <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/players"
            >Players</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-3">
  {@render children()}
</div>

<br>
<br>
<br>

<footer class="bg-dark text-white text-center py-4 mt-5">
  <div class="container">
    <p class="mb-0">&copy; 2025 Football Player Database. All rights reserved.</p>
  </div>
</footer>

<style>

nav a {
  transition: 0.3s ease;
  color: white;
  text-decoration: none;
  border-bottom: 2px solid transparent;
}
nav a:hover {
  border-bottom: 2px solid white;
  padding: 6px 0; 
}
</style>