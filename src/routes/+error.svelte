<script>
    import { page } from '$app/state';
    let src = '/src/lib/assets/spilled-coffee.png';
    let alt = 'spilled coffee'
</script>

<main>
    <section class="top-content">
        <h1 class="error">{page.status}</h1>
        <img src= {src} width="200" alt= {alt}>
    </section>

    <section class="bottom-content">
        <h2 class="error-message">ERROR: PAGE NOT FOUND</h2>
        <p>We couldn't find the page you were looking for... maybe it's time for a coffee break?</p>
    </section>
</main>

<style>

    * {
        box-sizing: border-box;
        margin: 0;

        --shade-accent: #8c8c8c;
    }

    @font-face {
        font-family: Poppins;
        src: url(/src/lib/assets/Poppins-Regular.ttf)
    }

        @font-face {
        font-family: Write;
        src: url(/src/lib/assets/JustMeAgainDownHere-Regular.ttf)
    }

    main {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        text-align: center;
        font-family: Poppins;

        .top-content {
            position: relative;
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;

            width: 400px;
            height: 200px;

            h1 {
                position: absolute;
                z-index: 1;
                font-size: 10em;
            }

            img {
                position: absolute;
                z-index: 1;
                right: 9%;
                width: 350px;
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
                rotate: 30deg;
            }
        }

        .bottom-content {
            position: absolute;
            bottom: 1em;
            right: 1.5em;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 1rem;

            p {
                color: var(--shade-accent);
                padding: 1rem;
                width: 60ch;
                font-weight: 600;
            }
        }
    }

</style>