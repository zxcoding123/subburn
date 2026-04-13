<script lang="ts">
    import { onMount } from 'svelte';

    let mouseX = $state(-100);
    let mouseY = $state(-100);
    let cursorX = $state(-100);
    let cursorY = $state(-100);

    // INCREASED SPEED: 0.35 provides a tight, high-performance snap
    const tick = () => {
        cursorX += (mouseX - cursorX) * 0.35; 
        cursorY += (mouseY - cursorY) * 0.35;
        requestAnimationFrame(tick);
    };

    onMount(() => {
        const updateMouse = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('mousemove', updateMouse);
        tick();

        return () => window.removeEventListener('mousemove', updateMouse);
    });
</script>

<div 
    class="fixed top-0 left-0 size-8 border border-orange-500 rounded-full pointer-events-none z-[10000]"
    style="transform: translate3d({cursorX - 16}px, {cursorY - 16}px, 0);"
></div>

<div 
    class="fixed top-0 left-0 size-1 bg-orange-600 rounded-full pointer-events-none z-[10000]"
    style="transform: translate3d({mouseX - 2}px, {mouseY - 2}px, 0);"
></div>

<style>
  

    /* Hide on mobile/touch - standard for custom cursors */
    @media (pointer: coarse) {
        div { display: none; }
        :global(html), :global(body) { cursor: auto !important; }
    }
</style>