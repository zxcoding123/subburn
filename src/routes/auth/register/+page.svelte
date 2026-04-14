<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { fade, slide } from "svelte/transition";
	import Mail from "@lucide/svelte/icons/mail";
	import Lock from "@lucide/svelte/icons/lock";
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	import Logo from "$lib/components/global/Logo.svelte";

	// --- State Management ---
	let step = $state(1); // 1: Security, 2: Personalization

	// --- Account & Vault Data ---
	let email = $state('');
	let password = $state('');
	let vaultAlias = $state('');
	let baseCurrency = $state('PHP'); // Defaulting to your local context
	let burnLimit = $state(0);
	let auditFrequency = $state('weekly');

	const handleNextStep = () => {
		if (step === 1) {
			// Basic validation could go here
			step = 2;
		} else {
			// Final Submission
			const payload = {
				email,
				password,
				vaultAlias,
				baseCurrency,
				burnLimit,
				auditFrequency
			};
			console.log("Creating Account & Vault:", payload);
		}
	};
</script>

<div class="min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center px-6">
	<div class="w-full max-w-[400px]">
		<div class="flex flex-col items-center mb-8">
			<Logo height={40} width={40} />

			{#key step}
				<div in:fade={{ duration: 200 }} class="text-center mt-4">
					<h1 class="text-2xl font-bold tracking-tight text-zinc-900">
						{step === 1 ? 'Create your Account' : 'Initialize your Vault'}
					</h1>
					<p class="text-zinc-500 text-sm mt-1.5 px-4">
						{step === 1 
							? 'Establish a secure entry point for your subscription audit.' 
							: 'Define the parameters of your high-fidelity ledger.'}
					</p>
				</div>
			{/key}
		</div>

		<div class="bg-white border border-orange-500/20 rounded-[2.5rem] shadow-xl shadow-orange-500/5 overflow-hidden transition-all duration-500">
			<div class="p-8">
				{#if step === 1}
					<div in:fade={{ duration: 200 }} class="space-y-4">
						<div class="space-y-2">
							<label for="email" class="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Email</label>
							<div class="relative group">
								<Mail class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-zinc-400 group-focus-within:text-orange-600 transition-colors" />
								<input bind:value={email} type="email" id="email" placeholder="vault@example.com" class="w-full bg-zinc-50 border border-zinc-100 focus:border-orange-500/40 focus:ring-4 focus:ring-orange-500/5 outline-none rounded-2xl py-3 px-11 transition-all text-sm" />
							</div>
						</div>

						<div class="space-y-2">
							<label for="password" class="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Password</label>
							<div class="relative group">
								<Lock class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-zinc-400 group-focus-within:text-orange-600 transition-colors" />
								<input bind:value={password} type="password" id="password" placeholder="••••••••" class="w-full bg-zinc-50 border border-zinc-100 focus:border-orange-500/40 focus:ring-4 focus:ring-orange-500/5 outline-none rounded-2xl py-3 px-11 transition-all text-sm" />
							</div>
						</div>

						<div in:fade class="relative py-4">
							<div class="absolute inset-0 flex items-center"><span class="w-full border-t border-zinc-100"></span></div>
							<div class="relative flex justify-center text-[10px] uppercase tracking-tighter">
								
                                <span class="bg-white px-3 text-zinc-400 font-medium">Quick Connect</span>
							</div>
						</div>

						<div class="grid grid-cols-2 gap-3">
							<button class="flex items-center justify-center gap-2 border border-zinc-100 hover:bg-zinc-50 rounded-2xl py-3 px-4 transition-all active:scale-95 cursor-pointer">
							<svg class="size-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
                                <span class="text-xs font-bold text-zinc-700">Google</span>
							</button>
							<button class="flex items-center justify-center gap-2 border border-zinc-100 hover:bg-zinc-50 rounded-2xl py-3 px-4 transition-all active:scale-95 cursor-pointer">
								<svg class="size-4 text-zinc-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
                                <span class="text-xs font-bold text-zinc-700">GitHub</span>
							</button>
						</div>
					</div>
				{:else}
					<div in:fade={{ duration: 200 }} class="space-y-5">
						<div class="space-y-1.5">
							<label for="alias" class="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Vault Alias</label>
							<input bind:value={vaultAlias} type="text" id="alias" placeholder="e.g. Personal Ledger" class="w-full bg-zinc-50 border border-zinc-100 focus:border-orange-500/40 focus:ring-4 focus:ring-orange-500/5 outline-none rounded-2xl py-3 px-4 transition-all text-sm" />
						</div>

						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-1.5">
								<label for="currency" class="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Currency</label>
								<select bind:value={baseCurrency} id="currency" class="w-full bg-zinc-50 border border-zinc-100 focus:border-orange-500/40 outline-none rounded-2xl py-3 px-4 transition-all text-sm cursor-pointer">
									<option value="USD">USD ($)</option>
									<option value="PHP">PHP (₱)</option>
									<option value="EUR">EUR (€)</option>
								</select>
							</div>
							<div class="space-y-1.5">
								<label for="limit" class="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Burn Limit</label>
								<input bind:value={burnLimit} type="number" id="limit" placeholder="0.00" class="w-full bg-zinc-50 border border-zinc-100 focus:border-orange-500/40 outline-none rounded-2xl py-3 px-4 transition-all text-sm" />
							</div>
						</div>

						<div class="space-y-2">
							<label class="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Audit Cadence</label>
							<div class="flex p-1 bg-zinc-100 rounded-2xl">
								{#each ['daily', 'weekly', 'monthly'] as freq}
									<button 
										onclick={() => auditFrequency = freq}
										class="flex-1 py-2 text-[10px] font-bold uppercase tracking-tight rounded-xl transition-all
										{auditFrequency === freq ? 'bg-white text-orange-600 shadow-sm' : 'text-zinc-400 hover:text-zinc-600'}"
									>
										{freq}
									</button>
								{/each}
							</div>
						</div>

						<div class="bg-orange-50/50 border border-orange-100 rounded-2xl p-4 flex gap-3 items-start">
							<div class="size-2 rounded-full bg-orange-500 mt-1.5 shrink-0"></div>
							<p class="text-[10px] leading-relaxed text-orange-800">
								<strong>Stateless Security:</strong> We use your email solely for sync. Subscription data is siloed and anonymous.
							</p>
						</div>
					</div>
				{/if}

				<Button 
					onclick={handleNextStep}
					class="cursor-pointer w-full bg-orange-600 hover:bg-orange-700 text-white rounded-2xl py-6 text-sm font-semibold group mt-6 transition-all active:scale-[0.98]"
				>
					{step === 1 ? 'Continue to Vault Initialization' : 'Initialize Ledger'}
					<ArrowRight class="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
				</Button>

				{#if step === 2}
					<button onclick={() => step = 1} class="w-full mt-4 text-[10px] uppercase tracking-widest text-zinc-400 font-bold hover:text-zinc-600 transition-colors">
						← Back to security
					</button>
				{/if}
			</div>

			<div class="bg-zinc-50/50 border-t border-zinc-100 p-6 text-center">
				<a href="/auth" class="text-sm text-zinc-500 transition-all font-semibold active:scale-95">
					Already registered? <span class="text-orange-600 hover:underline">Sign in instead</span>
				</a>
			</div>
		</div>

		<p class="mt-8 text-center text-[11px] leading-relaxed text-zinc-400 px-4">
			By initializing your vault, you agree to SubBurn's 
			<a href="/privacy" class="text-zinc-900 font-medium hover:text-orange-600 transition-colors underline decoration-zinc-200">Privacy Protocols</a>.
		</p>
	</div>
</div>