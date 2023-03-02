<!-- ************************ PROPERTIES **************************** -->
<script lang="ts">
	/** @type {import("./$types").PageData} */
	import { onMount } from 'svelte';
	import { assets } from '$app/paths';
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';

	// States
	let isLoggedIn = false;
	let isMobileMenuOpen = false;

	// Handlers
	const mobileMenuBtnHandler = () => isMobileMenuOpen = !isMobileMenuOpen;

	// Life cycles
	onMount(async () => {
		// If already logged in
		if ($page.data.session) isLoggedIn = true;
	});
</script>

<!-- ************************** BODY ******************************* -->
<section>
	<nav class="pb-10 pt-1">
		<div class="container px-4 mx-auto">
			<div class="flex items-center justify-between relative">
				<a class="inline-block relative top-2" href="/">
					<img src="{assets}/imgs/logo.png" alt="" width="126" />
				</a>
				<button on:click={mobileMenuBtnHandler} class="lg:hidden navbar-burger">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z"
							fill="#000"
						/>
					</svg>
				</button>
				<div class="hidden lg:block ml-auto mr-14">
					<ul class="inline-flex">
						{#if isLoggedIn}
							<li class="mr-8">
								<a
									class="inline-block font-bold hover:text-gray-900"
									href="/dashboard">Dashboard</a
								>
							</li>
						{:else}
							<li class="mr-8">
								<a
									class="inline-block font-bold hover:text-gray-900"
									aria-current="page"
									href="/">Home</a
								>
							</li>
						{/if}
						<li class="mr-8">
							<a class="inline-block font-bold hover:text-gray-900" href="/tech"
								>TechStack</a
							>
						</li>
						<li class="mr-8">
							<a class="inline-block font-bold hover:text-gray-900" target="_blank" href="https://github.com/MelodicCrypter/SvelteKit-Hasura-Authjs-TS-URQL-Scaffolding"
							>Git Repo</a
							>
						</li>
					</ul>
				</div>
				{#if isLoggedIn}
					<div class="hidden lg:block">
						<a
							on:click={() => signOut()}
							class="inline-block px-8 py-3 text-white font-bold bg-black hover:bg-gray-900 cursor-pointer"
							>Logout</a
						>
					</div>
				{/if}
			</div>
		</div>
	</nav>

	<div class:hidden={!isMobileMenuOpen} class="navbar-menu fixed top-0 left-0 bottom-0 w-3/4 max-w-xs z-50">
		<div on:click={mobileMenuBtnHandler} class="navbar-backdrop fixed inset-0 bg-black bg-opacity-75" />
		<nav class="relative flex flex-col h-full p-8 bg-white">
			<div class="flex items-center justify-between mb-12">
				<a class="items-center" href="/">
					<img src="{assets}/imgs/logo.png" alt="" width="102" />
				</a>
				<button
					on:click={mobileMenuBtnHandler}
					class="inline-block navbar-close focus:outline-none"
					type="button"
					aria-label="Close"
				>
					<img src="https://shuffle.dev/pstls-assets/images/navigations/x2.svg" alt="" />
				</button>
			</div>
			<div>
				<ul>
					{#if isLoggedIn}
						<li class="py-3">
							<a class="inline-block font-bold hover:text-gray-900" href="/dashboard"
								>Dashboard</a
							>
						</li>
					{:else}
						<li class="py-3">
							<a class="inline-block font-bold hover:text-gray-900" href="/">Home</a>
						</li>
					{/if}
					<li class="py-3">
						<a class="inline-block font-bold hover:text-gray-900" href="/tech"
							>TechStack</a
						>
					</li>
					<li class="py-3">
						<a class="inline-block font-bold hover:text-gray-900" target="_blank" href="https://github.com/MelodicCrypter/SvelteKit-Hasura-Authjs-TS-URQL-Scaffolding"
						>Git Repo</a
						>
					</li>
				</ul>
			</div>
			{#if isLoggedIn}
				<div class="mt-auto">
					<div>
						<a
							on:click={() => signOut()}
							class="block py-3 text-center font-bold cursor-pointer">Logout</a
						>
					</div>
				</div>
			{/if}
		</nav>
	</div>
</section>

<!-- ************************* STYLES *****************************	-->
<style lang="scss">
</style>
