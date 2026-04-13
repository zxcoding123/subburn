<script lang="ts">
    import { Database, ShieldAlert, Share2, Layers, Cpu, HardDrive } from "@lucide/svelte";
</script>

<section id="architecture" class="py-32 bg-[#080808] text-white border-t border-zinc-900">
    <div class="max-w-6xl mx-auto px-6">
        
        <div class="mb-24 space-y-4">
            <span class="text-orange-500 font-mono text-[10px] tracking-[0.4em] uppercase">System Architecture // 02</span>
            <h2 class="text-4xl md:text-5xl font-bold tracking-tight">Built for Data <span class="text-zinc-600">Sovereignty.</span></h2>
            <p class="text-zinc-500 max-w-xl text-sm leading-relaxed">
                SubBurn isn't a wrapper around a bank API. It's a custom-built Laravel engine designed to treat your financial records as isolated, high-integrity objects.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 border border-zinc-800 bg-zinc-900/20">
            
            <div class="hidden lg:flex lg:col-span-1 border-r border-zinc-800 items-center justify-center">
                <span class="rotate-180 font-mono text-[9px] text-zinc-700 uppercase tracking-[0.5em] [writing-mode:vertical-lr]">
                    Internal_Infrastructure_Core
                </span>
            </div>

            <div class="lg:col-span-11 grid grid-cols-1 md:grid-cols-3">
                
                <div class="p-10 border-b md:border-b-0 md:border-r border-zinc-800 group hover:bg-orange-500/[0.02] transition-colors">
                    <div class="flex items-center gap-3 mb-8">
                        <div class="size-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-orange-500 transition-colors">
                            <Layers size={16} />
                        </div>
                        <span class="font-mono text-[10px] text-zinc-500 tracking-widest">MODULE_01</span>
                    </div>
                    <h3 class="text-lg font-bold mb-4">Multi-Tenant Isolation</h3>
                    <p class="text-xs text-zinc-500 leading-relaxed">
                        We leverage Laravel's scoping to ensure your ledger data exists in a logical silo. Cross-contamination is architecturally impossible at the query level.
                    </p>
                    <div class="mt-8 pt-4 border-t border-zinc-800/50">
                        <span class="text-[9px] font-mono text-zinc-700 uppercase tracking-tighter">Target: Logical_Database_Separation</span>
                    </div>
                </div>

                <div class="p-10 border-b md:border-b-0 md:border-r border-zinc-800 group hover:bg-orange-500/[0.02] transition-colors">
                    <div class="flex items-center gap-3 mb-8">
                        <div class="size-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-orange-500 transition-colors">
                            <Cpu size={16} />
                        </div>
                        <span class="font-mono text-[10px] text-zinc-500 tracking-widest">MODULE_02</span>
                    </div>
                    <h3 class="text-lg font-bold mb-4">Zero-API Integrity</h3>
                    <p class="text-xs text-zinc-500 leading-relaxed">
                        By bypassing Plaid and third-party aggregators, your data stays within the SubBurn environment. No "middle-man" has access to your recurring costs.
                    </p>
                    <div class="mt-8 pt-4 border-t border-zinc-800/50">
                        <span class="text-[9px] font-mono text-zinc-700 uppercase tracking-tighter">Status: No_External_Dependencies</span>
                    </div>
                </div>

                <div class="p-10 group hover:bg-orange-500/[0.02] transition-colors">
                    <div class="flex items-center gap-3 mb-8">
                        <div class="size-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-orange-500 transition-colors">
                            <HardDrive size={16} />
                        </div>
                        <span class="font-mono text-[10px] text-zinc-500 tracking-widest">MODULE_03</span>
                    </div>
                    <h3 class="text-lg font-bold mb-4">Flat-File Portability</h3>
                    <p class="text-xs text-zinc-500 leading-relaxed">
                        Built with an export-first mentality. At any moment, generate a high-fidelity JSON dump of your entire history. Vendor lock-in is a bug, not a feature.
                    </p>
                    <div class="mt-8 pt-4 border-t border-zinc-800/50">
                        <span class="text-[9px] font-mono text-zinc-700 uppercase tracking-tighter">Output: Schema_Compliant_JSON</span>
                    </div>
                </div>

            </div>
        </div>

        <div class="mt-16 bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 overflow-x-auto">
            <div class="flex items-center gap-8 font-mono text-[10px] text-zinc-500 min-w-max">
                <div class="flex items-center gap-2">
                    <div class="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    <span>SYSTEM_READY</span>
                </div>
                <div class="flex gap-4">
                    <span class="text-zinc-700">|</span>
                    <span>ENV: <span class="text-zinc-300">production</span></span>
                    <span class="text-zinc-700">|</span>
                    <span>DB: <span class="text-zinc-300">postgresql_16</span></span>
                    <span class="text-zinc-700">|</span>
                    <span>CRYPT: <span class="text-zinc-300">aes-256-gcm</span></span>
                    <span class="text-zinc-700">|</span>
                    <span>FRAMEWORK: <span class="text-zinc-300">laravel_11.x</span></span>
                </div>
            </div>
        </div>
    </div>
</section>