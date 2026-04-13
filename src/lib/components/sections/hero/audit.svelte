<script lang="ts">
    import { X, Check, Activity, ShieldAlert, Zap, Search, AlertCircle, Terminal } from "@lucide/svelte";
</script>

<section id="comparison" class="py-32 bg-[#fcfcfc] border-t border-zinc-100">
    <div class="max-w-6xl mx-auto px-6">
        
        <div class="mb-20 space-y-4">
            <span class="text-orange-600 font-mono text-[10px] tracking-[0.4em] uppercase">Comparative_Analysis // 03</span>
            <h2 class="text-4xl font-bold tracking-tight text-zinc-900">Efficiency vs. <span class="text-zinc-400">Convenience.</span></h2>
        </div>

        <div class="border border-zinc-200 bg-white shadow-xl shadow-zinc-200/50 overflow-hidden rounded-sm">
            
            <div class="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 bg-zinc-50 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                <div class="md:col-span-4 p-4 border-r border-zinc-200">Parameter_Test</div>
                <div class="md:col-span-4 p-4 border-r border-zinc-200">Legacy_Auto_Scanners</div>
                <div class="md:col-span-4 p-4 bg-zinc-900 text-orange-500">SubBurn_Ledger_v1</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-100 items-stretch">
                <div class="md:col-span-4 p-6 bg-zinc-50/30">
                    <div class="flex items-center gap-3">
                        <ShieldAlert size={14} class="text-zinc-400" />
                        <span class="font-bold text-sm">Privacy Vector</span>
                    </div>
                </div>
                <div class="md:col-span-4 p-6 border-x border-zinc-100 space-y-2">
                    <div class="flex items-center gap-2 text-red-500 font-bold text-[10px] uppercase">
                        <X size={12} /> High_Risk
                    </div>
                    <p class="text-xs text-zinc-500 leading-relaxed">Requires bank credentials and 3rd-party API handshakes.</p>
                </div>
                <div class="md:col-span-4 p-6 bg-zinc-900 text-white space-y-2">
                    <div class="flex items-center gap-2 text-emerald-400 font-bold text-[10px] uppercase">
                        <Check size={12} /> Zero_Knowledge
                    </div>
                    <p class="text-xs text-zinc-400 leading-relaxed">Local-first data entry. No credentials ever leave your mind.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-100 items-stretch">
                <div class="md:col-span-4 p-6 bg-zinc-50/30">
                    <div class="flex items-center gap-3">
                        <Search size={14} class="text-zinc-400" />
                        <span class="font-bold text-sm">Data Integrity</span>
                    </div>
                </div>
                <div class="md:col-span-4 p-6 border-x border-zinc-100 space-y-2">
                    <div class="flex items-center gap-2 text-zinc-400 font-bold text-[10px] uppercase">
                        <AlertCircle size={12} /> Probabilistic
                    </div>
                    <p class="text-xs text-zinc-500 leading-relaxed">Algorithms "guess" categories. Mismatched labels for Amazon/Apple charges.</p>
                </div>
                <div class="md:col-span-4 p-6 bg-zinc-900 text-white space-y-2">
                    <div class="flex items-center gap-2 text-emerald-400 font-bold text-[10px] uppercase">
                        <Check size={12} /> Deterministic
                    </div>
                    <p class="text-xs text-zinc-400 leading-relaxed">Human-verified labeling. 100% accuracy for every recurring cost.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 items-stretch">
                <div class="md:col-span-4 p-6 bg-zinc-50/30">
                    <div class="flex items-center gap-3">
                        <Activity size={14} class="text-zinc-400" />
                        <span class="font-bold text-sm">User Awareness</span>
                    </div>
                </div>
                <div class="md:col-span-4 p-6 border-x border-zinc-100 space-y-2">
                    <div class="flex items-center gap-2 text-red-500 font-bold text-[10px] uppercase">
                        <X size={12} /> Passive_Apathy
                    </div>
                    <p class="text-xs text-zinc-500 leading-relaxed">Notifications are easily ignored. Frictionless spending leads to financial drift.</p>
                </div>
                <div class="md:col-span-4 p-6 bg-zinc-900 text-white space-y-2">
                    <div class="flex items-center gap-2 text-orange-500 font-bold text-[10px] uppercase">
                        <Zap size={12} /> Active_Intent
                    </div>
                    <p class="text-xs text-zinc-400 leading-relaxed">The "Manual Checkpoint" forces a conscious decision to keep or cancel.</p>
                </div>
            </div>
        </div>

        <div class="mt-12 flex justify-center">
            <div class="inline-flex items-center gap-4 px-6 py-3 bg-zinc-900 rounded-full border border-zinc-800 shadow-xl shadow-orange-950/10">
                <Terminal size={14} class="text-orange-500" />
                <span class="text-[11px] font-mono text-zinc-300 uppercase tracking-[0.2em]">
                    Verdict: <span class="text-white">Awareness is the only true optimization.</span>
                </span>
            </div>
        </div>
    </div>
</section>