<script lang="ts">
    export let days: number;

    let _days = days;

    const reset = async () => {
        const response = await fetch("/reset", { method: 'PUT' })
        const body = await response.json();
        _days = body.days;
    }
</script>

It has been {_days} days since the last refactor.

<button on:click={reset}>Reset</button>
