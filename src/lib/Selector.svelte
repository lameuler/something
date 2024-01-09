<script lang="ts">
    import { crossfade } from 'svelte/transition';

    export let options: string[] = []
    export let selected: number
</script>

<div class="flex items-stretch font-medium">
    {#each options as option, i }
        <a href="{ option.toLowerCase() }" on:click={ () => selected = i } class="rounded-full hover:bg-slate-400 hover:bg-opacity-20 relative px-3 py-0.5" class:opacity-75={selected!==i}>
            { option }
            {#if i === selected}<div class="absolute inset-0 bg-slate-400 bg-opacity-30 rounded-full -z-10"/>{/if}
        </a>
    {/each}
</div>