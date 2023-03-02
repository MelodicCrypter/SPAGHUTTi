<!-- ************************ PROPERTIES **************************** -->
<script lang="ts">
	/** @type {import('./$types').PageData} */
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base, assets } from '$app/paths';
	import { signIn } from '@auth/sveltekit/client';
	import { page } from '$app/stores';

	// States
	export let data;
	let signingIn = false;

	// Handlers
	const signinHandler = async (provider: string) => {
		if (signingIn) return;

		signingIn = true;
		await signIn(provider);
	};

	// Life cycles
	onMount(async () => {
		// If already logged in
		if ($page.data.session) await goto('/dashboard');
	});
</script>

<!-- ************************** BODY ******************************* -->
<main class="mt-32">
	<div class="md:max-w-md mx-auto">
		<div class="mb-10 text-center">
			<h2 class="font-heading mb-4 text-4xl md:text-5xl text-black font-black tracking-tight">
				SPAGHUTTi
			</h2>
			<p class="text-gray-500 font-bold">
				A starter scaffolding to immediately use SvelteKit with Postgres
				along with Auth.js, GraphQL, Hasura, URQL, TypeScript and Tailwind as your project base.
			</p>
		</div>
		<form>
			<div class="flex flex-wrap -m-3">
				<div class="w-full p-3">
					<div class="flex flex-wrap md:justify-end -m-2">
						<div class="w-full p-2">
							<a
								class="cursor-pointer flex items-center justify-center px-8 py-3.5 bg-gray-100 hover:bg-gray-50 focus:ring-4 focus:ring-blue-200 rounded-full"
								on:click={() => signinHandler('google')}
								><img
									class="mr-2.5 w-6"
									src="{assets}/imgs/google.svg"
									alt=""
								/><span class="text-lg text-gray-900 text-center font-bold"
									>Sign in with Google</span
								></a
							>
						</div>
					</div>
				</div>
				<div class="w-full p-3">
					<div class="flex flex-wrap md:justify-end -m-2">
						<div class="w-full p-2">
							<a
								class="cursor-pointer flex items-center justify-center px-8 py-3.5 bg-gray-100 hover:bg-gray-50 focus:ring-4 focus:ring-blue-200 rounded-full"
								on:click={() => signinHandler('facebook')}
								><img
									class="mr-2.5 w-6"
									src="{assets}/imgs/facebook.svg"
									alt=""
								/><span class="text-lg text-gray-900 text-center font-bold"
									>Sign in with Facebook</span
								></a
							>
						</div>
					</div>
				</div>
				<div class="w-full p-3">
					<div class="flex flex-wrap md:justify-end -m-2">
						<div class="w-full p-2">
							<a
								class="cursor-pointer flex items-center justify-center px-8 py-3.5 bg-gray-100 hover:bg-gray-50 focus:ring-4 focus:ring-blue-200 rounded-full"
								on:click={() => signinHandler('github')}
								><img
									class="mr-2.5 w-6"
									src="{assets}/imgs/github.svg"
									alt=""
								/><span class="text-lg text-gray-900 text-center font-bold"
									>Sign in with Github</span
								></a
							>
						</div>
					</div>
				</div>

				<div class="w-full p-3 mt-2 text-center">
					{#if signingIn}
						<p>Please wait while signing in...</p>
					{/if}
				</div>
			</div>
		</form>
	</div>
</main>

<!-- ************************* STYLES *****************************	-->
<style lang="scss">
</style>
