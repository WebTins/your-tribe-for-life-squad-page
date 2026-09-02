<script>
    import { page } from '$app/state';
    let src = '/src/lib/assets/spilled-coffee.png';
    let alt = 'spilled coffee'
</script>

<h1 class="error">{page.status}</h1>

<img src= {src} width="200" alt= {alt}>

<h2 class="error-message">ERROR: PAGE NOT FOUND</h2>

<p>We couldn't find the page you were looking for... maybe it's time for a coffee break?</p>
