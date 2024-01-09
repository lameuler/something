<script lang="ts">
    import Input from './Input.svelte';
    let value = ''
</script>
<form action="" on:submit|preventDefault={()=>console.log('search',value)}>
    <Input placeholder="Search" bind:value>
        <button slot="left" type="submit" class="p-2 -mr-2 opacity-50 hover:opacity-80">
            <svg class="h-6 w-6 icon" viewBox="0 0 24 24">
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
            </svg>
    
        </button>
        <div slot="right">
            {#if value.length > 0}
                <button type="reset" class="p-2 opacity-50 hover:opacity-80" on:click={ () => value = '' }>
                    <svg class="icon h-6 w-6" viewBox="0 0 24 24">
                        <path d="M18 6l-12 12" /><path d="M6 6l12 12" />
                    </svg>
                </button>
            {/if}
            <button type="button" class="p-2 opacity-50 hover:opacity-80">
                <svg class="icon h-6 w-6" viewBox="0 0 24 24">
                    <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" />
                </svg>
            </button>
        </div>
    </Input>
</form>