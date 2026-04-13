<script lang="ts">
    import { BarChart3, BellRing, History, Fingerprint, Layers, Target, Activity, Zap } from "@lucide/svelte";
</script>

<section id="features" class="py-32 bg-[#0c0c0c] text-white overflow-hidden border-t border-zinc-900">
    <div class="max-w-6xl mx-auto px-6">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-end">
            <div class="lg:col-span-6 space-y-4">
                <div class="flex items-center gap-2 text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em]">
                    <Zap size={12} fill="currentColor" /> System_Capabilities_v1.0
                </div>
                <h2 class="text-5xl font-black tracking-tighter leading-none">
                    High-Fidelity <br />
                    <span class="text-zinc-600 italic">Audit Tools.</span>
                </h2>
            </div>
            <div class="lg:col-span-6">
                <p class="text-zinc-500 text-sm font-mono leading-relaxed max-w-sm border-l border-orange-500/30 pl-6">
                    SubBurn isn't a "dashboard." It's a high-performance engine designed to expose every cent of your digital overhead.
                </p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-zinc-800 gap-px border border-zinc-800">
            
            <div class="bg-[#0c0c0c] p-10 space-y-8 group hover:bg-zinc-900/50 transition-colors">
                <div class="flex justify-between items-start">
                    <BarChart3 size={20} class="text-orange-600" />
                    <span class="font-mono text-[9px] text-zinc-700 uppercase">Module_01</span>
                </div>
                <div class="space-y-3">
                    <h4 class="text-lg font-bold tracking-tight">Multi-Year Projections</h4>
                    <p class="text-xs text-zinc-500 leading-relaxed uppercase font-mono tracking-tighter text-orange-500/80">
                        Calc_Mode: Exponential_Burn
                    </p>
                    <p class="text-sm text-zinc-400 leading-relaxed">
                        Instantly calculate the "Lifetime Burn." Visualize the 5-year opportunity cost of any recurring expense.
                    </p>
                </div>
            </div>

            <div class="bg-[#0c0c0c] p-10 space-y-8 group hover:bg-zinc-900/50 transition-colors">
                <div class="flex justify-between items-start">
                    <Layers size={20} class="text-orange-600" />
                    <span class="font-mono text-[9px] text-zinc-700 uppercase">Module_02</span>
                </div>
                <div class="space-y-3">
                    <h4 class="text-lg font-bold tracking-tight">Categorical Silos</h4>
                    <p class="text-xs text-zinc-500 leading-relaxed uppercase font-mono tracking-tighter text-orange-500/80">
                        Grouping: Logical_Isolation
                    </p>
                    <p class="text-sm text-zinc-400 leading-relaxed">
                        Segment your burn by Entertainment, Dev Tools, or Infrastructure. Identify which vertical is bleeding the most.
                    </p>
                </div>
            </div>

            <div class="bg-[#0c0c0c] p-10 space-y-8 group hover:bg-zinc-900/50 transition-colors">
                <div class="flex justify-between items-start">
                    <BellRing size={20} class="text-orange-600" />
                    <span class="font-mono text-[9px] text-zinc-700 uppercase">Module_03</span>
                </div>
                <div class="space-y-3">
                    <h4 class="text-lg font-bold tracking-tight">Renewal Protocols</h4>
                    <p class="text-xs text-zinc-500 leading-relaxed uppercase font-mono tracking-tighter text-orange-500/80">
                        Hook: T-48_Hour_Alert
                    </p>
                    <p class="text-sm text-zinc-400 leading-relaxed">
                        Automated triggers notify you 48 hours before renewal. The decision to keep or kill is always yours.
                    </p>
                </div>
            </div>

            <div class="bg-[#0c0c0c] p-10 space-y-8 group hover:bg-zinc-900/50 transition-colors">
                <div class="flex justify-between items-start">
                    <Fingerprint size={20} class="text-orange-600" />
                    <span class="font-mono text-[9px] text-zinc-700 uppercase">Module_04</span>
                </div>
                <div class="space-y-3">
                    <h4 class="text-lg font-bold tracking-tight">Offline-Ready Logic</h4>
                    <p class="text-xs text-zinc-500 leading-relaxed uppercase font-mono tracking-tighter text-orange-500/80">
                        Stack: Local_Sync_First
                    </p>
                    <p class="text-sm text-zinc-400 leading-relaxed">
                        Architecture focused on speed and resilience. Your data belongs to you, stored in your personal isolated vault.
                    </p>
                </div>
            </div>

            <div class="bg-[#0c0c0c] p-10 space-y-8 group hover:bg-zinc-900/50 transition-colors md:col-span-2">
                <div class="flex justify-between items-start">
                    <History size={20} class="text-orange-600" />
                    <span class="font-mono text-[9px] text-zinc-700 uppercase">Module_05</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-3">
                        <h4 class="text-lg font-bold tracking-tight text-white">The Audit Archive</h4>
                        <p class="text-sm text-zinc-400 leading-relaxed">
                            A historical log of every successful cancellation. Track your "Savings Velocity" as you trim the fat.
                        </p>
                    </div>
                    <div class="bg-zinc-900/50 border border-zinc-800 p-4 rounded flex items-center gap-4">
                        <div class="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                        <span class="font-mono text-[10px] text-zinc-400 uppercase tracking-widest leading-none">Archiving_Active</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-12 flex items-center gap-4 opacity-20">
            <div class="h-px flex-grow bg-zinc-800"></div>
            <Activity size={12} class="text-zinc-500" />
            <div class="h-px flex-grow bg-zinc-800"></div>
        </div>
    </div>
</section>