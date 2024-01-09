<script>
    import Search from '$lib/Search.svelte';
    import { data } from '$lib/data';

</script>
<main class="p-4 pt-20 grid grid-rows-[auto_1fr] h-full">
    <Search/>
    <div class="mt-4 h-full w-full relative">
        <div class="h-full w-full absolute overflow-y-auto rounded-lg bg-gray-200 dark:bg-gray-900 border-gray-200 dark:border-gray-900 border-t">
            <div class="flex h-10 border-b border-slate-500 px-1 sticky top-0 bg-gray-200 dark:bg-gray-900 w-full min-w-[40rem] font-medium">
                <div class="cell w-28 max-w-28 py-2">Date</div>
                <div class="cell w-[30%] max-w-[30%] py-2">Email</div>
                <div class="cell w-[50%] grow py-2">Message</div>
            </div>
            {#each data as entry}
            <div class="flex h-8 border-b border-slate-500/60 px-1 items-center min-w-[40rem] text-sm">
                
                <div class="cell w-28 max-w-28">{
                    Intl.DateTimeFormat('en-SG', { dateStyle: 'medium', timeStyle: undefined, timeZone: 'Singapore'}).format(entry.date)
                    }</div>
                <!-- <div class="cell w-[30%] max-w-[30%]">{entry.name}</div> -->
                <div class="cell w-[30%] max-w-[30%]">{entry.email}</div>
                <div class="cell w-[50%] grow">{entry.message}</div>
                
            </div>
            {/each}
        </div>
    </div>
</main>

<svelte:head>
    <title>Dashboard | Something</title>
</svelte:head>

<style lang="postcss">
    div.cell {
        @apply px-2 text-ellipsis overflow-clip text-nowrap whitespace-nowrap
    }
</style>