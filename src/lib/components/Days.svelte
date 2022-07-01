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
        font-weight: 700;

        font-size: 16px;
        @media (min-width: 768px) {
            font-size: 24px;
        }
        @media (min-width: 1024px) {
            font-size: 36px;
        }
    }

    pre {
        position: relative;
        z-index: 1;

        font-family: "DSEG7 Classic";
        width: fit-content;
        margin: 0;

        font-size: 48px;
        @media (min-width: 768px) {
            font-size: 98px;
        }
        @media (min-width: 1024px) {
            font-size: 128px;
        }
        
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
        color: #181818;
    }

    :global(body.light) pre::before {
        color: #D8D8D8;
    }
</style>