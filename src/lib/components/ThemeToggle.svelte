<script lang="ts">
    import { afterUpdate } from "svelte";

    import DarkMode from "svelte-dark-mode";
    import SunIcon from 'svelte-icons/io/IoIosSunny.svelte'
    import MoonIcon from 'svelte-icons/io/IoIosMoon.svelte'


    type Theme = "dark" | "light";

    let theme: Theme;
    $: switchTheme = theme === "dark" ? "light" : "dark" as Theme;

    afterUpdate(() => {
        document.body.className = theme;
    })
</script>


<DarkMode bind:theme />

<button on:click={() => (theme = switchTheme)}>
    {#if theme === "dark"}
        <SunIcon />
    {:else}
        <MoonIcon />
    {/if}
</button>


<style lang="postcss">
    button {
        width: 3rem;
        height: 3rem;
        @media (min-width: 1024px) {
            width: 4rem;
            height: 4rem;
        }

        background-color: transparent;
        border: none;
        cursor: pointer;
        border-radius: 50%;
    }

    :global(body.light) button:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    :global(body.dark) button:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
</style>