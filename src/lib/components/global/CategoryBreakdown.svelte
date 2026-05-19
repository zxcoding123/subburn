<script>
	const categories = [
		{ name: 'Housing', amount: 800, color: 'bg-blue-500', percentage: 45 },
		{ name: 'Entertainment', amount: 240, color: 'bg-orange-500', percentage: 20 },
		{ name: 'Food & Dining', amount: 310, color: 'bg-green-500', percentage: 25 },
		{ name: 'Others', amount: 70, color: 'bg-slate-400', percentage: 10 }
	];
</script>

<div class="space-y-6">
	{#each categories as cat}
		<div class="space-y-2">
			<div class="flex justify-between text-xs font-bold uppercase tracking-tight">
				<span class="text-slate-600">{cat.name}</span>
				<div class="flex gap-2">
					<span class="text-slate-800">${cat.amount}</span>
					<span class="text-slate-300 font-medium">{cat.percentage}%</span>
				</div>
			</div>
			<div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
				<div class="h-full {cat.color} rounded-full" style="width: {cat.percentage}%"></div>
			</div>
		</div>
	{/each}
</div>