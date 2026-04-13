<script lang="ts">
    import { ShieldCheck, Database, Download, Lock, EyeOff, FileJson } from "@lucide/svelte";
</script>

<section id="privacy" class="bg-[#0c0c0c] text-white py-32 px-6 overflow-hidden">
    <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div class="lg:col-span-5 space-y-4">
                <div class="flex items-center gap-2 text-orange-500 font-mono text-[10px] uppercase tracking-[0.3em]">
                    <Lock size={12} /> Privacy Protocol v1.0
                </div>
                <h2 class="text-4xl font-bold tracking-tight">Your data is a <br/><span class="text-zinc-500">liability, not an asset.</span></h2>
            </div>
            <div class="lg:col-span-7 flex items-end">
                <p class="text-zinc-500 text-sm leading-relaxed max-w-md">
                    We architected SubBurn around the principle of data minimization. Since we don't connect to bank APIs, the primary attack vector of modern finance apps is removed entirely.
                </p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
            
            <div class="bg-[#0c0c0c] p-10 space-y-6 hover:bg-zinc-900/50 transition-colors">
                <Database size={20} class="text-orange-600" />
                <div class="space-y-3">
                    <h4 class="font-bold text-lg">PostgreSQL Isolation</h4>
                    <p class="text-xs text-zinc-500 leading-relaxed font-mono uppercase tracking-tighter">
                        Storage: RDS / AES-256-GCM
                    </p>
                    <p class="text-sm text-zinc-400 leading-relaxed">
                        Every ledger is cryptographically tied to your <code class="bg-zinc-800 px-1 rounded text-orange-400">user_id</code>. We use Laravel's native encryption for sensitive metadata.
                    </p>
                </div>
            </div>

            <div class="bg-[#0c0c0c] p-10 space-y-6 hover:bg-zinc-900/50 transition-colors">
                <EyeOff size={20} class="text-orange-600" />
                <div class="space-y-3">
                    <h4 class="font-bold text-lg">Zero External Scripts</h4>
                    <p class="text-xs text-zinc-500 leading-relaxed font-mono uppercase tracking-tighter">
                        No-FB / No-GA / No-GTM
                    </p>
                    <p class="text-sm text-zinc-400 leading-relaxed">
                        We don't use Facebook Pixels or Google Analytics. Your session data is processed purely on our Laravel server. What happens in your ledger stays there.
                    </p>
                </div>
            </div>

            <div class="bg-[#0c0c0c] p-10 space-y-6 hover:bg-zinc-900/50 transition-colors">
                <FileJson size={20} class="text-orange-600" />
                <div class="space-y-3">
                    <h4 class="font-bold text-lg">Ownership & Portability</h4>
                    <p class="text-xs text-zinc-500 leading-relaxed font-mono uppercase tracking-tighter">
                        Format: .JSON / .CSV / .XLSX
                    </p>
                    <p class="text-sm text-zinc-400 leading-relaxed">
                        You can trigger a full database export at any time. We provide a clean JSON schema so you can migrate your data to any other tool if you leave us.
                    </p>
                </div>
            </div>

        </div>

        <div class="mt-12 flex items-center gap-6 opacity-30">
            <div class="h-px flex-grow bg-zinc-800"></div>
            <div class="font-mono text-[9px] flex gap-4 uppercase tracking-[0.2em]">
                <span>SSL_Certified</span>
                <span>GDPR_Compliant</span>
                <span>End_To_End_Hashing</span>
            </div>
            <div class="h-px flex-grow bg-zinc-800"></div>
        </div>
    </div>
</section>