<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Terminal, ArrowRight, Code2 } from "@lucide/svelte";
</script>

<section class="py-32 px-6 bg-black">
    <div class="max-w-4xl mx-auto border border-zinc-200 bg-white rounded-sm p-12 md:p-24 shadow-2xl shadow-zinc-200/50 relative overflow-hidden">
        
        <div class="absolute top-0 right-0 p-8 opacity-[0.05] select-none pointer-events-none font-mono text-[10px] text-zinc-900 leading-tight hidden md:block">
            <pre>
            GET /api/v1/ledger HTTP/1.1
            Host: subburn.app
            Authorization: Bearer ****************
            
            {'{'}
                "action": "INITIALIZE_VAULT",
                "schema": "laravel_11_pg",
                "encryption": "AES_256_GCM"
            {'}'}
            </pre>
        </div>

        <div class="relative z-10 text-center space-y-8">
            <div class="flex justify-center mb-4">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 text-orange-500 rounded font-mono text-[10px] uppercase tracking-widest">
                    <Terminal size={12} /> Root_Access_Available
                </div>
            </div>

            <h2 class="text-4xl md:text-7xl font-black tracking-tighter text-zinc-900 leading-[0.9]">
                Stop the <br />
                <span class="text-orange-600 italic">Bleed.</span>
            </h2>
            
            <p class="text-zinc-500 text-lg max-w-md mx-auto leading-relaxed">
                Step away from passive automation. Deploy your private ledger and regain control of your financial intent.
            </p>

            <div class="flex flex-col gap-6 justify-center items-center pt-8">
                <!-- <Button class="bg-zinc-900 hover:bg-black text-white h-16 px-12 text-xl rounded-none font-bold transition-all hover:gap-6 flex items-center gap-4 group">
                    Initialize Ledger 
                    <ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
                </Button> -->

                  <Button class="bg-zinc-900 hover:bg-black text-white h-16 px-12 text-xl rounded-none font-bold transition-all hover:gap-6 flex items-center gap-4 group">
                    Join the Waitlist 
                    <ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div class="flex flex-col items-center gap-2">
                    <span class="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em] flex items-center gap-2">
                        <Code2 size={12} /> System_Engine: Laravel 11 + Svelte 5
                    </span>
                    <div class="flex gap-1">
                        <div class="size-1 bg-zinc-200"></div>
                        <div class="size-1 bg-zinc-200"></div>
                        <div class="size-1 bg-orange-500"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>