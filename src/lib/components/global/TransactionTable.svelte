<script>
	import Icon from '@iconify/svelte';

	const items = [
		{ name: 'Amazon Prime', category: 'Entertainment', amount: '-$14.99', icon: 'mdi:video' },
		{ name: 'Starbucks', category: 'Food & Drink', amount: '-$6.50', icon: 'mdi:coffee' },
		{ name: 'Apple Cloud', category: 'Software', amount: '-$2.99', icon: 'mdi:cloud' },
		{ name: 'Salary Deposit', category: 'Income', amount: '+$3,400', icon: 'mdi:cash', isIncome: true },
	];
</script>

<div class="space-y-4">
	{#each items as item}
		<div class="flex items-center justify-between group">
			<div class="flex items-center gap-3">
				<div class="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
					<Icon icon={item.icon} width="20" />
				</div>
				<div>
					<div class="text-sm font-bold text-slate-800">{item.name}</div>
					<div class="text-[10px] uppercase font-bold text-slate-400 tracking-wide">{item.category}</div>
				</div>
			</div>
			<div class="text-sm font-bold {item.isIncome ? 'text-green-500' : 'text-slate-800'}">
				{item.amount}
			</div>
		</div>
	{/each}
</div>