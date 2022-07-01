<script>
    import "../app.css";
    import { ThemeToggle } from "../lib/components";
</script>


<main>
    <div>
        <ThemeToggle />
    </div>

    <slot />
</main>



<style lang="postcss">
    main {
        width: 100vw;
        height: 100vh;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    div {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
</style>
