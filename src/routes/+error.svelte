<script>
    import { page } from '$app/state'
    import BackButton from '$lib/components/BackButton.svelte';
    let src = '/src/lib/assets/spilled-coffee.png'
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

    <BackButton /> 
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

    @keyframes --spill {
        0% {
                scale: 1;
                
        }
        50% {
                scale: 1.2;
                
        }
        100% {
                scale: 1;
                
        }
    }

    @keyframes --hovering {
        0% {
                rotate: -5deg;
                
        }
        50% {
                rotate: 5deg;
                
        }
        100% {
                rotate: -5deg;
                
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
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

        @supports (animation-timeline: view()) {
            animation: fade-in .3s ease-in-out;
        }

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
                animation-name: --hovering;
                animation-duration: 3s;
                animation-iteration-count: infinite;
            }

            img {
                position: absolute;
                z-index: 1;
                right: 9%;
                width: 350px;
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
                rotate: 30deg;

                animation-name: --spill;
                animation-duration: 3s;
                animation-iteration-count: infinite;
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