<script lang="ts">
    export let content: number;

    // "!" is a full-width blank 7-segment character
    const padded = content.toString().padStart(3, "!");
</script>

<pre>{padded}</pre>


<style lang="postcss">
    pre {
        position: relative;
        font-family: "DSEG7 Classic";
        font-size: 128px;
        z-index: 1;

        &::before {
            position: absolute;
            top: 0;
            right: 0;
            z-index: -1;
            
            content: "888";
            color: rgb(255, 255, 255, 0.15);
        }
    }
</style>