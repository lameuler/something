<script>
    import Input from '$lib/Input.svelte';
import Selector from '$lib/Selector.svelte';
</script>


<main class="flex flex-col justify-center items-center z-10 pt-16 h-full">
    <Selector options={['Register','Login']} selected={0}/>
    <div class="relative bg-slate-50/80 dark:bg-gray-900/90 p-4 my-4 rounded-2xl border border-gray-300 dark:border-gray-800 w-72">
        <div class="font-bold text-lg text-center mb-4 mt-2">Welcome to Something!</div>
        <form class="flex flex-col gap-4" action="" on:submit={e=>console.log(e)}>
            <Input placeholder="Email"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Confirm Password"/>
            <button type="submit" class="text-slate-100 bg-gradient-to-bl from-indigo-600 to-purple-600 hover:shadow-violet-600/50 hover:shadow-lg transition-all px-3 py-2 rounded-lg font-semibold">Register</button>
        </form>
        <div class="absolute inset-4 -z-10 bg-gradient-to-t from-purple-500/80 to-emerald-600/80 blur-3xl"/>
    </div>
</main>

<svelte:head>
    <title>Register | Something</title>
</svelte:head>