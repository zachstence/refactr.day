<script lang="ts">
    import { SevenSegment } from "$lib/components";

    export let days: number;

    let _days = days;

    const reset = async () => {
        const response = await fetch("/reset", { method: 'PUT' })
        const body = await response.json();
        _days = body.days;
    }
</script>

<!-- 
It has been {_days} days since the last refactor.

<button on:click={reset}>Reset</button>
-->
<div>test</div>
<SevenSegment content={19} />

