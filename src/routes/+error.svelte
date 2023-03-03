<!-- ************************ PROPERTIES **************************** -->
<script lang="ts">
	import { page } from '$app/stores';

	// Components
	import NotFound from '$lib/client/components/ui/other/NotFound.svelte';
</script>

<!-- ************************** BODY ******************************* -->
{#if $page.status === 404}
	<NotFound />
{:else}
	<div class="w-full text-center" style="height: 100vh">
		{#if $page.error.message.includes('dynamically imported')}
			<p class="relative top-56">
				Something went wrong: <em
					>Try turning off your <span class="font-semibold">Ad Blocker</span> and try again.</em
				>
			</p>
		{:else}
			<p class="relative top-56">Something went wrong: <em>{$page.error.message}</em></p>
		{/if}
	</div>
{/if}

<!-- Footer -->

<!-- ************************* STYLES *****************************	-->
<style>
	.logo-wrap {
		width: 126px;
	}
</style>
