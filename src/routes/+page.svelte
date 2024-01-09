<script>
    import Search from '$lib/Search.svelte';
    import { data } from '$lib/data';

</script>
<main class="min-h-full">
    <section class="flex items-center justify-center flex-col p-4 pt-20 min-h-screen max-w-full overflow-x-clip">
        <h1 class="z-20 text-center text-4xl sm:text-5xl font-medium text-gray-600 dark:text-gray-400">
            Welcome to
            <br/>
            <span class="text-6xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-violet-600 to-emerald-400">Something</span>
        </h1>
        <section class="-mt-14 relative flex justify-center">
            <table class="overflow-x-clip">
                <tr><td/><td/><td/><td/><td/><td/></tr>
                <tr><td/><td/><td/><td/><td/><td/></tr>
                <tr><td/><td/><td/><td/><td/><td/></tr>
                <tr><td/><td/><td/><td/><td/><td/></tr>
                <tr class="h-12 -z-10">
                    <td/><td/>
                    <td colspan="2" class="relative z-10">
                        <div class="bg-slate-100/80 dark:bg-slate-900/80 absolute p-1 -inset-y-2 -inset-x-4 border-2 border-indigo-600">
                            <div class="absolute -inset-x-2 inset-y-0 -z-10 bg-gradient-to-t from-purple-600/90 to-emerald-500/90 blur-xl"/>
                            <div class="h-4 w-4 rounded-full bg-indigo-600 absolute -bottom-2 -right-2 border-2 border-slate-200 dark:border-slate-800"/>
                            <div class="bg-indigo-600 text-slate-50 absolute -translate-y-full px-1.5 rounded-sm -top-1 -left-1 text-sm font-medium">CS6131</div>
                            Something is the leading database for something and something else.
                        </div>
                    </td>
                    <td/><td/>
                </tr>
                <tr class="h-8"><td/><td/><td/><td/><td/><td/></tr>
                <tr class="h-10 z-10">
                    <td/><td/>
                    <td>
                        <a href="/register" class="min-w-32 flex h-full justify-center items-center text-slate-100 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-lg">Get Started</a>
                    </td>
                    <td>
                        <a href="/login" class="min-w-32 flex h-full justify-center items-center font-semibold dark:text-violet-400 text-violet-600 hover:underline">Login</a>
                    </td>
                    <td/><td/>
                </tr>
                <tr class="h-8"><td/><td/><td colspan="2" class="text-slate-500">Scroll for more...</td><td/><td/></tr>
                <tr><td/><td/><td/><td/><td/><td/></tr>
                <tr><td/><td/><td/><td/><td/><td/></tr>
            </table>
            <div class="bg-gradient-to-b from-slate-50 dark:from-slate-950 to-transparent h-24 absolute top-0 w-full"/>
            <div class="bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent h-16 absolute bottom-0 w-full"/>
            <div class="bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent w-20 absolute left-0 h-full"/>
            <div class="bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent w-20 absolute right-0 h-full"/>
        </section>
    </section>
    <section class="text-center flex flex-col items-center max-w-full">
        <h2 class="text-4xl font-medium">Find that perfect something<br/>without worrying about anything else</h2>
        <p class="opacity-60 text-xl m-4">Designed to make sure you find that something you need. Always.</p>
        <div class="flex gap-4 p-4 max-w-4xl w-full flex-col md:flex-row relative">
            <div class="relative bg-slate-50 dark:bg-gray-900 p-4 rounded-2xl border border-gray-300 dark:border-gray-800 md:w-3/5">
                <Search/>
                <div class="text-start h-28 w-full overflow-clip rounded-t-lg bg-gray-500/15 mt-2 relative">
                    <div class="flex h-8 border-b border-slate-500 px-2 w-full font-medium">
                        <div class="cell w-28 max-w-28 py-1">Date</div>
                        <div class="cell grow py-1">Message</div>
                    </div>
                    {#each data.slice(0,5) as entry}
                    <div class="flex h-8 border-b border-slate-500/60 px-2 items-center text-sm">
                        
                        <div class="cell w-28 max-w-28 min-w-28">{
                            Intl.DateTimeFormat('en-SG', { dateStyle: 'medium', timeStyle: undefined, timeZone: 'Singapore'}).format(entry.date)
                        }</div>
                        <div class="cell grow whitespace-nowrap overflow-clip text-ellipsis">{entry.message}</div>
                        
                    </div>
                    {/each}
                </div>
                <div class="h-12 -mb-20 w-full -translate-y-full bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"/>
                <h3 class="text-xl font-medium mt-4 translate-y-0">Powerful search</h3>
                <p class="opacity-70">Always find the something you need. Any way you want.</p>
            </div>
            <div class="bg-slate-50 dark:bg-gray-900 p-4 rounded-2xl border border-gray-300 dark:border-gray-800 md:w-2/5">
                <div class="bg-gradient-to-b from-slate-300/10 to-slate-500/10 rounded-lg flex p-5 shadow-inner items-center justify-center gap-2">
                    <svg class="icon h-12 w-12 opacity-60" style="stroke-width: 1.2" viewBox="0 0 24 24">
                        <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" /><path d="M7 20h10" /><path d="M9 16v4" /><path d="M15 16v4" /><path d="M9 12v-4" /><path d="M12 12v-1" /><path d="M15 12v-2" /><path d="M12 12v-1" />
                    </svg>
                    <div class="flex flex-col relative justify-between flex-grow h-5 z-10">
                        <div class="-inset-x-16 -inset-y-1 absolute -z-10 bg-gradient-to-r from-emerald-600/50 to-purple-600/50 blur-xl"/>
                        <div class="w-full h-0.5 overflow-clip bg-slate-500/30 rounded"><div class="w-1/2 h-full bg-gradient-to-r from-transparent via-purple-500 -translate-x-full to-transparent animate-[slide_700ms_linear_infinite_alternate]"/></div>
                        <div class="w-full h-0.5 overflow-clip bg-slate-500/30 rounded"><div class="w-1/2 h-full bg-gradient-to-r from-transparent via-violet-500 -translate-x-full to-transparent animate-[slide_700ms_350ms_linear_infinite_alternate]"/></div>
                        <div class="w-full h-0.5 overflow-clip bg-slate-500/30 rounded"><div class="w-1/2 h-full bg-gradient-to-r from-transparent via-indigo-500 -translate-x-full to-transparent animate-[slide_700ms_700ms_linear_infinite_alternate]"/></div>
                    </div>
                    <svg class="icon h-12 w-12 opacity-60" style="stroke-width: 1.2" viewBox="0 0 24 24">
                        <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><path d="M4 6v6a8 3 0 0 0 16 0v-6" /><path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                    </svg>
                </div>
                <h3 class="text-xl font-medium mt-4">Fast results</h3>
                <p class="opacity-70">Highly optimised relational database gets you that something. Lightning fast.</p>
            </div>
        </div>

        <h2 class="text-4xl font-medium mt-16">Not only something<br/>But something else too</h2>
        <p class="opacity-60 text-xl m-4">Going beyond to find something else. And everything else.</p>
        <div class="relative m-4">
            <div class="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-6 px-8 lg:px-12 py-8 text-start">
                <div>
                    <h3 class="font-medium my-1">Complete database</h3>
                    <p class="opacity-70 my-1">Industry leading database for everything something and something else.</p>
                </div>
                <div>
                    <h3 class="font-medium my-1">Always up to date</h3>
                    <p class="opacity-70 my-1">All databases are updated live around the clock to get you that something ASAP.</p>
                </div>
                <div>
                    <h3 class="font-medium my-1">Multiple sources</h3>
                    <p class="opacity-70 my-1">Data is sourced and aggregated from multiple trusted sources so you miss nothing.</p>
                </div>
                <div>
                    <h3 class="font-medium my-1">Verified by experts</h3>
                    <p class="opacity-70 my-1">All data is checked and verified by experts to give you something you can trust.</p>
                </div>
            </div>
            <div class="bg-gradient-to-r from-purple-500 to-blue-500 w-full h-0.5 absolute top-0 -z-20 opacity-60"/>
            <div class="bg-gradient-to-r from-indigo-500 to-emerald-500 w-full h-0.5 absolute bottom-0 -z-20 opacity-60"/>
            <div class="bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent w-20 absolute left-0 top-0 h-full -z-10"/>
            <div class="bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent w-20 absolute right-0 top-0 h-full -z-10"/>
        </div>

    </section>
    <section class="py-8 mt-8">
        <h2 class="text-4xl text-center font-medium">Pricing</h2>
        <p class="opacity-60 text-xl m-4 text-center">Get started for free.</p>
        <div class="flex flex-wrap justify-center gap-4 p-4">
            <div class="grid grid-rows-[auto_auto_1fr_auto] relative bg-slate-50/80 dark:bg-gray-900/90 p-4 rounded-2xl border border-gray-300 dark:border-gray-800 w-72">
                <h3 class="text-2xl mt-3 font-medium text-purple-600 dark:text-purple-400">Just Something</h3>
                <p class="text-xl my-3 opacity-80">Forever Free</p>
                <ul class="leading-loose">
                    <li class="flex items-center gap-1"><svg class="icon h-6 w-6 text-purple-500" viewBox="0 0 24 24">
                        <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
                    </svg>Powerful search</li>
                    <li class="flex items-center gap-1"><svg class="icon h-6 w-6 text-violet-500" viewBox="0 0 24 24">
                        <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
                    </svg>Complete database</li>
                </ul>
                <a href="/register" class="mt-6 px-3 py-1 text-center text-slate-100 w-full bg-purple-600 rounded-lg">Get Started</a>
                <div class="absolute inset-4 -z-10 bg-gradient-to-t from-purple-500/80 to-emerald-600/80 blur-2xl"/>
            </div>
            <div class="grid grid-rows-[auto_auto_1fr_auto] bg-slate-50/80 dark:bg-gray-900/90 p-4 rounded-2xl border border-gray-300 dark:border-gray-800 w-72">
                <h3 class="text-2xl mt-3 font-medium text-indigo-600 dark:text-indigo-400">Something More</h3>
                <p class="text-xl my-3 opacity-80">Coming Soon</p>
                Everything you get with Just Something, and more.
                <button class="mt-6 px-3 py-1 text-center text-slate-100 w-full bg-indigo-600/50 rounded-lg" disabled>Coming Soon</button>
            </div>
        </div>
    </section>
</main>

<svelte:head>
    <title>Something</title>
</svelte:head>

<style lang="postcss">
    td {
        @apply border-[1.5px] border-slate-400 dark:border-slate-800 h-6 min-w-24 text-center
    }
</style>