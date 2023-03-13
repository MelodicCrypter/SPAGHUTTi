<!-- ************************ PROPERTIES **************************** -->
<script lang="ts">
	/** @type {import("./$types").LayoutData} */
	import { setContextClient, createClient } from '@urql/svelte';

	// Components
	import MainNav from '$lib/client/components/ui/navs/MainNav.svelte';

	// Styles
	import './../app.pcss';

	// States, local and global
	export let data;

  // Initialize URQL client and context
  if (data && data.locals?.urqlOptions) {
    const client = createClient(data.locals?.urqlOptions);
    setContextClient(client);
  }
</script>

<!-- ************************** BODY ******************************* -->
<MainNav />
<slot />

<!-- ************************* STYLES *****************************	-->
<style lang="scss">
</style>
