<script lang="ts">
    import { Days } from "$lib/components";

    export let days: number;

    let _days = days;

    const reset = async () => {
        const response = await fetch("/reset", { method: 'PUT' })
        const body = await response.json();
        _days = body.days;
    }
</script>

<section>
    <p>It has been</p>
    <Days days={19} />
    <p>since the last refactor</p>
</section>


<style lang="postcss">
    section {
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-rows: 25% 50% 25%;
        grid-template-areas:
            "top"
            "middle"
            "bottom";
        justify-items: center;
        align-items: center;

        & *:first-child {
            align-self: end;
        }
        & *:last-child {
            align-self: start;
        }
    }

    p {
        font-family: Montserrat, sans-serif;
        font-size: 48px;
        font-weight: 900;
        text-transform: uppercase;
    }
</style>