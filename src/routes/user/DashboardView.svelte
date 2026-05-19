<script lang="ts">
	import Icon from '@iconify/svelte';
	import SummaryCard from '../../lib/components/global/SummaryCard.svelte';
	import TransactionTable from '../../lib/components/global/TransactionTable.svelte';
	import SpendChart from '../../lib/components/global/SpendChart.svelte';
	import CategoryBreakdown from '../../lib/components/global/CategoryBreakdown.svelte';

	// State for the on-off mechanism (Manual Entry vs Tracking)
	let isTrackingActive = $state(true);
	let user = { name: 'Alex Rivera', initials: 'AR' };

	// Derived stats based on tracking state or mock data
	const stats = $derived([
		{ label: 'Total Burn', value: '$1,420.50', icon: 'mdi:fire', color: 'text-orange-500', trend: '+12%' },
		{ label: 'Monthly Budget', value: '$2,500.00', icon: 'mdi:wallet-outline', color: 'text-blue-500', trend: '0%' },
		{ label: 'Remaining', value: '$1,079.50', icon: 'mdi:piggy-bank-outline', color: 'text-green-500', trend: '-5%' },
		{ label: 'Burn Rate', value: '$47.35/day', icon: 'mdi:trending-up', color: 'text-indigo-500', trend: '+2%' }
	]);

	const upcoming = [
		{ name: 'Netflix Premium', date: 'In 2 days', amount: '15.99' },
		{ name: 'Spotify Family', date: 'In 5 days', amount: '16.99' },
		{ name: 'Github Copilot', date: 'Next week', amount: '10.00' }
	];
</script>

<div class="min-h-screen bg-slate-50 flex">
	<!-- Sidebar -->
	<aside class="w-64 bg-slate-900 text-white hidden md:flex flex-col">
		<div class="p-6 text-2xl font-bold tracking-tighter flex items-center gap-2">
			<Icon icon="mdi:fire" class="text-orange-500" width="32" />
			SUBBURN
		</div>
		<nav class="flex-1 px-4 space-y-2 mt-4">
			<a href="/user" class="flex items-center gap-3 p-3 bg-orange-500/10 text-orange-500 rounded-lg">
				<Icon icon="mdi:view-dashboard" width="20" /> Dashboard
			</a>
			<a href="/user/transactions" class="flex items-center gap-3 p-3 text-slate-400 hover:text-white transition-colors">
				<Icon icon="mdi:format-list-bulleted" width="20" /> Transactions
			</a>
			<a href="/user/settings" class="flex items-center gap-3 p-3 text-slate-400 hover:text-white transition-colors">
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
						aria-label="Toggle tracking"
					>
						<span class="inline-block h-3 w-3 transform rounded-full bg-white transition-transform {isTrackingActive ? 'translate-x-6' : 'translate-x-1'}"></span>
					</button>
				</div>
			</div>

			<div class="flex items-center gap-4">
				<div class="hidden sm:flex items-center gap-2 mr-4 border-r border-slate-200 pr-4">
					<button class="bg-orange-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-orange-600 transition-colors flex items-center gap-1 shadow-sm shadow-orange-200">
						<Icon icon="mdi:plus" width="16" /> ADD SPEND
					</button>
					<button class="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors flex items-center gap-1">
						<Icon icon="mdi:export-variant" width="16" /> EXPORT
					</button>
				</div>
				<button class="p-2 text-slate-400 hover:text-slate-600">
					<Icon icon="mdi:bell-outline" width="24" />
				</button>
				<div class="h-8 w-8 bg-orange-100 border border-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-xs">
					{user.initials}
				</div>
			</div>
		</header>

		<!-- Dashboard Content -->
		<div class="p-8 overflow-y-auto">
			{#if !isTrackingActive}
				<div class="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-3 text-amber-800">
					<Icon icon="mdi:alert-circle-outline" width="20" />
					<span class="text-sm font-medium">Tracking is currently paused. Mindful Manual Entry is recommended for new expenditures.</span>
				</div>
			{/if}

			<!-- Stats Grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
				{#each stats as stat}
					<SummaryCard {...stat} />
				{/each}
			</div>

			<!-- Primary Insights Row -->
			<div class="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
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

				<!-- Monthly Goal Progress -->
				<div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
					<h3 class="font-bold text-slate-800 mb-6">Budget Health</h3>
					<div class="flex-1 flex flex-col items-center justify-center -mt-4">
						<div class="relative h-40 w-40">
							<svg class="h-full w-full" viewBox="0 0 36 36">
								<path class="text-slate-100 stroke-current" stroke-width="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
								<path class="text-orange-500 stroke-current" stroke-width="3" stroke-dasharray="57, 100" stroke-linecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
							</svg>
							<div class="absolute inset-0 flex flex-col items-center justify-center">
								<span class="text-3xl font-bold text-slate-800">57%</span>
								<span class="text-[10px] uppercase font-bold text-slate-400">Burned</span>
							</div>
						</div>
						<div class="mt-6 text-center">
							<p class="text-sm font-bold text-slate-700">12 Days Left</p>
							<p class="text-xs text-slate-400">Target burn: &lt; $89.95/day</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Secondary Data Row -->
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<!-- Category Breakdown -->
				<div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
					<div class="flex justify-between items-center mb-6">
						<h3 class="font-bold text-slate-800">Categories</h3>
						<button class="text-[10px] uppercase font-bold text-orange-500 hover:underline">Analysis</button>
					</div>
					<CategoryBreakdown />
				</div>

				<!-- Recent Activity -->
				<div class="lg:col-span-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
					<h3 class="font-bold text-slate-800 mb-6">Recent Transactions</h3>
					<div class="flex-1">
						<TransactionTable />
					</div>
				</div>

				<!-- Upcoming Subscriptions -->
				<div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
					<h3 class="font-bold text-slate-800 mb-6 flex items-center gap-2">
						<Icon icon="mdi:calendar-clock" class="text-orange-500" /> Upcoming Burns
					</h3>
					<div class="space-y-4 flex-1">
						{#each upcoming as item}
							<div class="flex items-center justify-between border-l-2 border-orange-200 pl-3 py-1">
								<div>
									<p class="text-sm font-bold text-slate-800">{item.name}</p>
									<p class="text-[10px] text-slate-400 font-bold uppercase">{item.date}</p>
								</div>
								<p class="text-sm font-bold text-slate-800">${item.amount}</p>
							</div>
						{/each}
					</div>
					<button class="mt-6 text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">
						Manage Recurring
					</button>
				</div>
			</div>
		</div>
	</main>
</div>