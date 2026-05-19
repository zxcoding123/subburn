<script>
	import Icon from '@iconify/svelte';
	import SummaryCard from './SummaryCard.svelte';
	import TransactionTable from './TransactionTable.svelte';
	import SpendChart from './SpendChart.svelte';

	// State for the on-off mechanism
	let isTrackingActive = $state(true);
	let user = { name: 'Alex Rivera', plan: 'Pro User' };

	// Mock data
	const stats = $derived([
		{ label: 'Total Burn', value: '$1,420.50', icon: 'mdi:fire', color: 'text-orange-500', trend: '+12%' },
		{ label: 'Monthly Budget', value: '$2,500.00', icon: 'mdi:wallet-outline', color: 'text-blue-500', trend: '0%' },
		{ label: 'Efficiency', value: '84%', icon: 'mdi:chart-timeline-variant', color: 'text-green-500', trend: '+5%' }
	]);
</script>

<div class="min-h-screen bg-slate-50 flex">
	<!-- Sidebar -->
	<aside class="w-64 bg-slate-900 text-white hidden md:flex flex-col">
		<div class="p-6 text-2xl font-bold tracking-tighter flex items-center gap-2">
			<Icon icon="mdi:fire" class="text-orange-500" width="32" />
			SUBBURN
		</div>
		<nav class="flex-1 px-4 space-y-2 mt-4">
			<a href="/dashboard" class="flex items-center gap-3 p-3 bg-orange-500/10 text-orange-500 rounded-lg">
				<Icon icon="mdi:view-dashboard" width="20" /> Dashboard
			</a>
			<a href="/transactions" class="flex items-center gap-3 p-3 text-slate-400 hover:text-white transition-colors">
				<Icon icon="mdi:format-list-bulleted" width="20" /> Transactions
			</a>
			<a href="/settings" class="flex items-center gap-3 p-3 text-slate-400 hover:text-white transition-colors">
				<Icon icon="mdi:cog-outline" width="20" /> Settings
			</a>
		</nav>
	</aside>

	<!-- Main Content -->
	<main class="flex-1 flex flex-col min-w-0 overflow-hidden">
		<!-- Header -->
		<header class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8">
			<div class="flex items-center gap-4">
				<h1 class="text-xl font-semibold text-slate-800 uppercase tracking-wider text-sm">Overview</h1>
				
				<!-- On-Off Mechanism Toggle -->
				<div class="flex items-center gap-2 ml-8 bg-slate-100 p-1 rounded-full px-3">
					<span class="text-xs font-bold {isTrackingActive ? 'text-green-600' : 'text-slate-400'}">
						{isTrackingActive ? 'TRACKING LIVE' : 'PAUSED'}
					</span>
					<button 
						onclick={() => isTrackingActive = !isTrackingActive}
						class="relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus:outline-none {isTrackingActive ? 'bg-green-500' : 'bg-slate-300'}"
					>
						<span class="inline-block h-3 w-3 transform rounded-full bg-white transition-transform {isTrackingActive ? 'translate-x-6' : 'translate-x-1'}"></span>
					</button>
				</div>
			</div>

			<div class="flex items-center gap-4">
				<button class="p-2 text-slate-400 hover:text-slate-600">
					<Icon icon="mdi:bell-outline" width="24" />
				</button>
				<div class="h-8 w-8 bg-orange-100 border border-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-xs">
					AR
				</div>
			</div>
		</header>

		<!-- Dashboard Content -->
		<div class="p-8 overflow-y-auto">
			{#if !isTrackingActive}
				<div class="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-3 text-amber-800">
					<Icon icon="mdi:alert-circle-outline" width="20" />
					<span class="text-sm font-medium">Tracking is currently paused. New expenditures will not be logged automatically.</span>
				</div>
			{/if}

			<!-- Stats Grid -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				{#each stats as stat}
					<SummaryCard {...stat} />
				{each}
			</div>

			<!-- Charts and Tables -->
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<!-- Chart -->
				<div class="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
					<div class="flex justify-between items-center mb-6">
						<h3 class="font-bold text-slate-800">Spending Burn Rate</h3>
						<select class="text-xs bg-slate-50 border-none rounded-md font-semibold text-slate-500">
							<option>Last 7 Days</option>
							<option>Last 30 Days</option>
						</select>
					</div>
					<div class="h-64 w-full">
						<SpendChart active={isTrackingActive} />
					</div>
				</div>

				<!-- Recent Activity -->
				<div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
					<h3 class="font-bold text-slate-800 mb-6">Recent Transactions</h3>
					<div class="flex-1">
						<TransactionTable />
					</div>
					<button class="mt-4 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors uppercase tracking-tight">
						View All History
					</button>
				</div>
			</div>
		</div>
	</main>
</div>