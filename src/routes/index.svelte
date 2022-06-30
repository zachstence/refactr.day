<script>
    import { daysSince, lastRefactor } from '../lib/stores'
</script>


It has been {$daysSince} days since the last refactor.

<button on:click={lastRefactor.reset}>Reset</button>
