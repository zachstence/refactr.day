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

        background: url('/background-tile-dark.png');
        background-cover: repeat;
    }
</style>
