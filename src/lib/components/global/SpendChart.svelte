<script>
	let { active = true } = $props();
	// Dynamic opacity based on "on-off" state
	let chartOpacity = $derived(active ? 1 : 0.4);
</script>

<svg class="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none" style="opacity: {chartOpacity}; transition: opacity 0.3s">
	<!-- Simple Area Chart Gradient -->
	<defs>
		<linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
			<stop offset="0%" stop-color="#f97316" stop-opacity="0.2" />
			<stop offset="100%" stop-color="#f97316" stop-opacity="0" />
		</linearGradient>
	</defs>

	<!-- The Line -->
	<path 
		d="M0,180 L50,150 L100,160 L150,100 L200,120 L250,60 L300,80 L350,40 L400,50 L400,200 L0,200 Z" 
		fill="url(#chartGradient)" 
	/>
	<path 
		d="M0,180 L50,150 L100,160 L150,100 L200,120 L250,60 L300,80 L350,40 L400,50" 
		fill="none" 
		stroke="#f97316" 
		stroke-width="3" 
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>