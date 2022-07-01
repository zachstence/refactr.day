<script lang="ts">
    export let days: number;

    // "!" is a full-width blank 7-segment character
    const padded = days.toString().padStart(3, "!");
</script>

<div>
    <pre>{padded}</pre>
    <span>DAYS</span>
</div>


<style lang="postcss">
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    span {
        font-size: 36px;
        font-weight: 700;
    }

    pre {
        position: relative;
        z-index: 1;

        font-family: "DSEG7 Classic";
        font-size: 128px;
        width: fit-content;
        margin: 0;

        &::before {
            position: absolute;
            top: 0;
            right: 0;
            z-index: -1;
            transition: color 0.15s ease;
            
            content: "888";
        }
    }

    :global(body.dark) pre::before {
        color: rgba(255, 255, 255, 0.15);
    }

    :global(body.light) pre::before {
        color: rgba(0, 0, 0, 0.15);
    }
</style>