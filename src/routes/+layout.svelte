<script lang="ts">
    import Footer from '$lib/Footer.svelte';
    import NavBar from '$lib/NavBar.svelte';
    import '../app.css'
    import { initScript, listener } from '$lib/appearance';
    import { onMount } from 'svelte';

    onMount(listener)
</script>

<div class="grid grid-rows-[1fr_auto] h-full w-full">
    <header class="fixed w-full flex justify-center z-50">
        <NavBar/>
    </header>
    <div class="z-20 max-w-6xl justify-self-center w-full overflow-x-clip relative"><slot/></div>
    <footer class="w-full flex justify-center"><Footer/></footer>
</div>

<svelte:head>
    <link rel="preload" href="/font/lexend-latin.woff2" as="font" type="font/woff2">
    {@html initScript}
</svelte:head>