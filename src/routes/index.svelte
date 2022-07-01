<script lang="ts">
    import { Blur, Days } from "$lib/components";

    export let days: number;

    let _days = days;

    const reset = async () => {
        const response = await fetch("/reset", { method: 'PUT' })
        const body = await response.json();
        _days = body.days;
    }
</script>


<section>
    <div class="end">
        <Blur>
            <p>It has been</p>
        </Blur>
    </div>

    <Blur>
        <Days days={_days} />
    </Blur>

    <div class="start">
        <Blur>
            <p>since the last refactor</p>
        </Blur>
    </div>
</section>


<style lang="postcss">
    section {
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-rows: 30% 40% 30%;
        justify-items: center;
        align-items: center;
    }

    .end {
        align-self: end;
    }

    .start {
        align-self: start;
    }

    p {
        font-family: Montserrat, sans-serif;
        font-weight: 900;
        text-transform: uppercase;
        text-align: center;

        font-size: 30px;
        @media (min-width: 768px) {
            font-size: 40px;
        }
        @media (min-width: 1024px) {
            font-size: 48px;
        }
    }
</style>