<script>
    import "../app.css";
</script>


<main>
    <slot />
</main>


<style lang="postcss">
    main {
        width: 100vw;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        background: url('/background-tile-dark.png');
        background-cover: repeat;
    }
</style>
