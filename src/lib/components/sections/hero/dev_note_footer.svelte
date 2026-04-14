<script lang="ts">
    import Logo from "$lib/components/global/Logo.svelte";
</script>

<footer class="bg-white border-t border-zinc-200 pt-32 pb-12 px-6">
    <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            
            <div class="lg:col-span-7 space-y-8">
                <div class="flex items-center gap-3">
                    <Logo />
                    <div class="h-px w-12 bg-zinc-200"></div>
                    <span class="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.3em]">Developer_Manifesto</span>
                </div>
                
                <div class="relative">
                    <span class="absolute -left-6 top-0 text-4xl text-zinc-100 font-serif">“</span>
                    <p class="text-zinc-600 leading-relaxed font-medium text-lg">
                        I built SubBurn because I was tired of "set and forget" finance apps. 
                        <span class="text-zinc-900">Automation made me lazy, and laziness made me broke.</span> 
                        I wanted a tool that respected my privacy and forced me to actually think 
                        about every pesos leaving my account. 
                    </p>
                </div>
                
                <div class="flex items-center gap-4">
                    <div class="size-10 rounded-full bg-zinc-100 border border-zinc-200"></div> <div>
                        <div class="text-sm font-bold text-zinc-900">Ahmad</div>
                        <div class="text-[10px] font-mono text-zinc-400 uppercase tracking-tighter">Lead_Architect // SubBurn</div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-5 grid grid-cols-2 gap-12 pt-4">
                <div class="space-y-6">
                    <h5 class="text-[10px] font-bold text-zinc-900 uppercase tracking-[0.2em] border-b border-zinc-100 pb-2">The Stack</h5>
                    <ul class="font-mono text-[11px] space-y-3 text-zinc-500 uppercase tracking-tight">
                        <li class="flex items-center gap-2">
                            <span class="size-1 bg-orange-500"></span> Laravel 11.x
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="size-1 bg-zinc-300"></span> Svelte 5 (Runes)
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="size-1 bg-zinc-300"></span> Tailwind v4
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="size-1 bg-zinc-300"></span> PostgreSQL 16
                        </li>
                    </ul>
                </div>

                <div class="space-y-6">
                    <h5 class="text-[10px] font-bold text-zinc-900 uppercase tracking-[0.2em] border-b border-zinc-100 pb-2">Navigation</h5>
                    <ul class="text-sm space-y-3 font-medium text-zinc-500">
                        <li class="hover:text-orange-600 cursor-pointer transition-colors flex items-center gap-2">
                             Documentation
                        </li>
                        <li class="hover:text-orange-600 cursor-pointer transition-colors flex items-center gap-2">
                             System_Status
                        </li>
                        <li class="hover:text-orange-600 cursor-pointer transition-colors flex items-center gap-2">
                             Open_Source
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="font-mono text-[10px] text-zinc-400 uppercase tracking-widest flex items-center gap-4">
                <span>© 2026 SubBurn_Ledger</span>
                <span class="text-zinc-200">/</span>
                <span class="text-zinc-300">Built in Zamboanga City</span>
            </div>
            
            <div class="flex gap-8 font-mono text-[10px] uppercase tracking-widest">
                <a href="#" class="text-zinc-400 hover:text-zinc-900 transition-colors">Terms_of_Audit</a>
                <a href="#" class="text-zinc-400 hover:text-zinc-900 transition-colors">Privacy_Logic</a>
            </div>
        </div>
    </div>
</footer>