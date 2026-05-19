<!-- src/routes/user/+page.svelte -->
<script lang="ts">
  import DashboardView from './DashboardView.svelte';
  import { onMount } from 'svelte';
  import { authState } from '$lib/stores/auth.svelte';
  import { goto } from '$app/navigation';

  // Protect the route: If the user isn't logged in, boot them to the login screen
  // onMount(async () => {
  //   // Ensure authState is not null or undefined before checking isAuthenticated
  //   if (!authState || authState.isAuthenticated === false) {
  //     goto('/auth'); 
  //   }
  // });
	// This will be your settings page
</script>

{#if authState?.isAuthenticated}
  <DashboardView />
{:else}
  <!-- <DashboardView /> -->
  <!-- Simple loading fallback while checking token validation -->
  <div class="h-screen w-screen flex items-center justify-center bg-gray-50">
    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
  </div> 
{/if}
