<script>
    import Appearance from './Appearance.svelte';

</script>
<nav class="flex justify-between items-center px-4 h-16 w-full max-w-6xl bg-gradient-to-b from-slate-50 dark:from-slate-950 via-slate-50/85 dark:via-slate-950/75 to-transparent">
    <a href="/" class="text-lg font-semibold flex items-center gap-1">
        <svg class="icon h-6 w-6" viewBox="0 0 24 24" stroke-width="2.5">
            <path d="M6 17.6l-2 -1.1v-2.5" /><path d="M4 10v-2.5l2 -1.1" /><path d="M10 4.1l2 -1.1l2 1.1" /><path d="M18 6.4l2 1.1v2.5" /><path d="M20 14v2.5l-2 1.12" /><path d="M14 19.9l-2 1.1l-2 -1.1" /><path d="M12 12l2 -1.1" /><path d="M18 8.6l2 -1.1" /><path d="M12 12l0 2.5" /><path d="M12 18.5l0 2.5" /><path d="M12 12l-2 -1.12" /><path d="M6 8.6l-2 -1.1" />
        </svg>
        <span class="hidden sm:inline">Something</span>
    </a>
    <div class="flex items-center gap-2">
        <a href="/dashboard" class="px-2 py-1 hover:underline">Dashboard</a>
        <a href="/login" class="bg-violet-600 text-slate-100 px-3 py-1 rounded-md font-medium">Login</a>
        <Appearance/>
    </div>
</nav>