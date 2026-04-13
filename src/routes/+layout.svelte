<script lang="ts">
    import './layout.css'; // Ensure this file exists in src/routes/
    import favicon from '$lib/assets/favicon.svg';
	import Cursor from '$lib/components/global/Cursor.svelte'; // adjust path as needed
    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>SubBurn // Professional Subscription Audit</title>
</svelte:head>

<div class="fixed inset-0 -z-20 bg-[#fcfcfc] overflow-hidden">
    <div 
        class="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style="background-image: linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px); background-size: 40px 40px;"
    ></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.02)_100%)]"></div>
</div>

<Cursor />

<div class="relative z-10">
    {@render children()}
</div>

