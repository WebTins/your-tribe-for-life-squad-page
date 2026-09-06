<a href="/" class="back-button">
    <span>
    <svg width="25" viewBox="0 0 54 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.878681 19.9705C-0.292892 21.142 -0.292892 23.0415 0.878681 24.2131L19.9706 43.305C21.1421 44.4766 23.0416 44.4766 24.2132 43.305C25.3848 42.1334 25.3848 40.2339 24.2132 39.0624L7.24264 22.0918L24.2132 5.12123C25.3848 3.94966 25.3848 2.05017 24.2132 0.878593C23.0416 -0.29298 21.1421 -0.29298 19.9706 0.878593L0.878681 19.9705ZM53.5 22.0918V19.0918L3 19.0918V22.0918V25.0918L53.5 25.0918V22.0918Z" fill="white"/>
    </svg>
        Back to home
    </span> 
</a>

<style>
    .back-button {
        position: absolute;
        left: 12em;
        bottom: 1em;

        display: flex;
        text-decoration: none;
        justify-content: center;
        align-items: center;

        background-color: #000000;
        font-weight: 600;
        color: white;

        width: 200px;
        height: 150px;

        cursor: pointer;
        z-index: 1;
        transition: mask-position 1.5s ease-in-out,-webkit-mask-position 1.5s ease-in-out;
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

        -webkit-mask-image: linear-gradient(45deg,#000 25%,rgba(0,0,0,.2) 50%,#000 75%);
        mask-image: linear-gradient(45deg,#000 25%,rgba(0,0,0,.2) 50%,#000 75%);
        -webkit-mask-size: 800%;
        mask-size: 800%;
        -webkit-mask-position: 0;
        mask-position: 0;

        span {
            display: flex;
            gap: 1em;
            transform: translateY(-.5em);
        }
    }

    .back-button:hover {
        transition: mask-position 1.5s ease ease-in-out,-webkit-mask-position 1.5s ease-in-out;
        -webkit-mask-position: 120%;
        mask-position: 120%;
        opacity: 1;
    }
</style>