<script>
    import { goto } from '$app/navigation'
</script>

<button class="back-button" onclick={() => goto('/')}>
    Back to home
</button>

<style>
    .back-button {
        background: #000000;
        color: white;
        border: none;
        width: 200px;
        height: 150px;
        cursor: pointer;

        padding: 1rem 2rem;

        clip-path: polygon(
            13% 30%,
            58% 31%,
            97% 30%,
            91% 60%,
            35% 61%,
            16% 64%,
            0% 50%
        );
    }
</style>