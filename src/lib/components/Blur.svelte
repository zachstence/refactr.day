<div class="wrapper">
    <div class="blur" />
    <slot />
</div>


<style lang="postcss">
    .wrapper {
        position: relative;
        z-index: 1;
        display: inline-block;
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 16px;
        @media (min-width: 768px) {
            padding: 36px;
        }
        @media (min-width: 1024px) {
            padding: 50px;
        }
    }
    .blur {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        
        border-radius: 4rem;
    }

    :global(body.light) .blur {
        background-color: rgba(255, 255, 255, 0.28);
        backdrop-filter: blur(1px);
        box-shadow: 0px 0px 100px 30px rgba(255, 255, 255, 0.4);
    }
    :global(body.dark) .blur {
        background-color: rgba(0, 0, 0, 0.28);
        backdrop-filter: blur(1px);
        box-shadow: 0px 0px 100px 30px rgba(0, 0, 0, 0.4);
    }

</style>