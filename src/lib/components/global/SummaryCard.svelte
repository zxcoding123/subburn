<script>
	import Icon from '@iconify/svelte';
	let { label, value, icon, color, trend } = $props();
</script>

<div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
	<div class="flex justify-between items-start mb-4">
		<div class="p-2 bg-slate-50 rounded-lg {color}">
			<Icon icon={icon} width="24" />
		</div>
		{#if trend !== '0%'}
			<span class="text-xs font-bold px-2 py-1 bg-green-50 text-green-600 rounded-md">
				{trend}
			</span>
		{/if}
	</div>
	<div class="text-2xl font-bold text-slate-900">{value}</div>
	<div class="text-sm font-medium text-slate-500">{label}</div>
</div>