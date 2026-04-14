<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { slide, fade } from 'svelte/transition';
    import { Plus,  ShieldCheck,  ArrowRight, Menu, X } from "@lucide/svelte";

    // --- Svelte 5 State (Demo Logic) ---
    let subscriptions = $state([
        { id: 1, name: 'Netflix', price: 15.99, category: 'Entertainment', color: 'bg-red-500' },
        { id: 2, name: 'ChatGPT Plus', price: 20.00, category: 'AI Tools', color: 'bg-indigo-500' },
        { id: 3, name: 'Vercel Pro', price: 20.00, category: 'Hosting', color: 'bg-black' }
    ]);

    let newName = $state('');
    let newPrice = $state<number | undefined>(undefined);

    function addSub() {
        if (newName && newPrice && newPrice > 0) {
            subscriptions.push({ 
                id: Date.now(), 
                name: newName, 
                price: newPrice, 
                category: 'Uncategorized', 
                color: 'bg-orange-500'
            });
            newName = '';
            newPrice = undefined;
        }
    }

    let isMenuOpen = $state(false);
    const closeMenu = () => isMenuOpen = false;

    const totalMonthly = $derived(subscriptions.reduce((acc, s) => acc + (s.price || 0), 0));
    const totalYearly = $derived(totalMonthly * 12);
    const lifetimeBurn = $derived(totalYearly * 5);

    import Logo from "$lib/components/global/Logo.svelte";
	import Features from "$lib/components/sections/hero/features.svelte";
	import Privacy from "$lib/components/sections/hero/privacy.svelte";
	import Philosophy from "$lib/components/sections/hero/philosophy.svelte";
	import Ledger from "$lib/components/sections/hero/ledger.svelte";
	import Audit from "$lib/components/sections/hero/audit.svelte";	
	import FinalCTA from "$lib/components/sections/hero/final_cta.svelte";
	import DevNoteFooter from "$lib/components/sections/hero/dev_note_footer.svelte";
</script>

<div class="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] font-sans selection:bg-orange-100">
    
<nav class="sticky top-0 z-50 px-4 mt-2"> <div class="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border-x border-b border-orange-500/20 rounded-b-3xl shadow-sm transition-all">
        <div class="px-6 py-4 flex justify-between items-center">
            <div class="flex items-center gap-3">
              <Logo />
                <span class="font-semibold tracking-tight text-lg">SubBurn<span class="text-orange-600">.</span></span>
            </div>

            <div class="hidden md:flex items-center gap-6 text-sm font-medium">
                <a href="#philosophy" class="text-zinc-500 hover:text-orange-600 transition-colors">Philosophy</a>
                <a href="#privacy" class="text-zinc-500 hover:text-orange-600 transition-colors">Privacy</a>
                <Button class="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-5 h-9 text-xs font-semibold">
                    Join Waitlist
                </Button>
            </div>

            <div class="md:hidden flex items-center">
                <button 
                    onclick={() => isMenuOpen = !isMenuOpen} 
                    class="text-zinc-900 focus:outline-none p-1"
                    aria-label="Toggle Menu"
                >
                    {#if isMenuOpen}
                        <div in:fade={{ duration: 200 }}>
                            <X class="size-6 text-orange-600" />
                        </div>
                    {:else}
                        <div in:fade={{ duration: 200 }}>
                            <Menu class="size-6" />
                        </div>
                    {/if}
                </button>
            </div>
        </div>

        {#if isMenuOpen}
            <div 
                transition:slide={{ duration: 300 }}
                class="md:hidden overflow-hidden border-t border-orange-500/10"
            >
                <div class="px-6 py-8 space-y-6 flex flex-col">
                    <a 
                        onclick={closeMenu}
                        href="#philosophy" 
                        class="text-lg text-zinc-500 hover:text-orange-600 font-medium transition-colors"
                    >
                        Philosophy
                    </a>
                    <a 
                        onclick={closeMenu}
                        href="#privacy" 
                        class="text-lg text-zinc-500 hover:text-orange-600 font-medium transition-colors"
                    >
                        Privacy
                    </a>
                    <Button class="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-2xl py-6 text-sm font-semibold">
                        Join Waitlist
                    </Button>
                </div>
            </div>
        {/if}
    </div>
</nav>

 <main class="max-w-7xl mx-auto px-6 pt-32 pb-40">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        
        <div class="lg:col-span-5 space-y-10 py-4">
            <div class="space-y-6">
                <div class="inline-flex gap-3 items-center px-4 py-1.5 bg-white border border-zinc-200 rounded-full shadow-sm">
                    <div class="size-2 rounded-full bg-orange-500 animate-pulse"></div>
                    <span class="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Secure_Ledger_v1.0</span>
                </div>
                
                <h1 class="text-6xl font-black leading-[0.9] tracking-tightest text-zinc-900">
                    Don't scan it.<br />
                    <span class="text-orange-600 italic">Audit it.</span>
                </h1>
                
                <p class="text-zinc-500 text-xl leading-relaxed max-w-md">
                    Passive bank-syncing is built to be forgotten. SubBurn uses <span class="text-zinc-900 font-semibold underline decoration-orange-500/30">manual checkpoints</span> to help you reclaim your financial focus.
                </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
                <Button class="bg-zinc-900 text-white px-10 h-14 rounded-2xl text-lg font-bold hover:bg-black transition-all group cursor-pointer">
                    Start Your Audit <ArrowRight size={20} class="ml-2 group-hover:translate-x-1 transition-transform"/>
                </Button>
                
                <div class="flex items-center gap-2 px-4 py-2 text-zinc-400">
                    <ShieldCheck size={16} />
                    <span class="text-[10px] font-mono uppercase tracking-widest">No Bank Access Required</span>
                </div>
            </div>
        </div>

        <div class="lg:col-span-7 relative">
            <div class="absolute -top-12 -right-4 font-mono text-[9px] text-zinc-300 hidden xl:block uppercase tracking-widest">
                [SYSTEM_LOG: CALCULATING_YEARLY_BURN_RATE...]
            </div>

            <div class="bg-white p-1 rounded-[2.5rem] border border-zinc-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
                <div class="bg-zinc-50/50 rounded-[2.2rem] p-8 space-y-8">
                    
                    <div class="grid grid-cols-3 gap-1 bg-white border border-zinc-200 p-2 rounded-2xl shadow-sm">
                        <div class="text-center py-4 border-r border-zinc-100">
                            <span class="text-[9px] text-zinc-400 uppercase tracking-widest font-bold block mb-1">Monthly</span>
                            <span class="text-2xl text-zinc-900 font-black">${totalMonthly.toFixed(2)}</span>
                        </div>
                        <div class="text-center py-4 border-r border-zinc-100 bg-orange-50/30">
                            <span class="text-[9px] text-orange-600 uppercase tracking-widest font-bold block mb-1">Yearly</span>
                            <span class="text-2xl text-orange-600 font-black">${totalYearly.toFixed(0)}</span>
                        </div>
                        <div class="text-center py-4">
                            <span class="text-[9px] text-zinc-300 uppercase tracking-widest font-bold italic block mb-1">5-Yr Burn</span>
                            <span class="text-2xl text-zinc-300 font-black">${lifetimeBurn.toFixed(0)}</span>
                        </div>
                    </div>

                    <div class="space-y-3 max-h-[280px] overflow-y-auto pr-2 custom-scrollbar">
                        {#each subscriptions as sub}
                            <div class="flex items-center justify-between p-4 bg-white border border-zinc-100 rounded-2xl hover:border-orange-200 transition-colors group">
                                <div class="flex items-center gap-4">
                                    <div class="size-10 {sub.color} rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg shadow-current/10">
                                        {sub.name[0]}
                                    </div>
                                    <div>
                                        <span class="font-bold text-zinc-900">{sub.name}</span>
                                        <span class="text-[9px] text-zinc-400 block uppercase tracking-widest mt-0.5">{sub.category}</span>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <span class="text-sm font-mono text-zinc-900 font-bold">${sub.price.toFixed(2)}</span>
                                    <span class="text-[9px] text-zinc-300 block uppercase font-mono">/mo</span>
                                </div>
                            </div>
                        {/each}
                    </div>

                    <div class="flex gap-3 p-2 bg-white border border-zinc-200 rounded-2xl shadow-inner">
                        <input 
                            bind:value={newName} 
                            placeholder="Service name..." 
                            class="flex-grow bg-transparent border-none rounded-xl px-4 py-3 text-sm font-medium outline-none focus:placeholder:text-zinc-300" 
                        />
                        <div class="flex items-center bg-zinc-50 rounded-xl px-3 border border-zinc-100">
                            <span class="text-zinc-400 text-xs font-mono">$</span>
                            <input 
                                bind:value={newPrice} 
                                type="number" 
                                placeholder="0.00" 
                                class="w-20 bg-transparent border-none px-2 py-3 text-sm font-mono outline-none" 
                            />
                        </div>
                        <Button onclick={addSub} class="bg-orange-600 hover:bg-orange-700 text-white rounded-xl aspect-square p-0 size-[46px] shadow-lg shadow-orange-600/20 active:scale-95 transition-all cursor-pointer">
                            <Plus size={20} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
		<Features />
		<Privacy />
		<Philosophy />
		<Ledger />
		<Audit />	
		<FinalCTA />	
	<footer>
		<DevNoteFooter />
	</footer>
</div>

<style>
    :global(html) { scroll-behavior: smooth; }
    input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; }
</style>