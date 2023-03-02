<!-- ***************** 🧩 PROPTERTIES 🧩 ******************* -->
<script lang="ts">
	import { base, assets } from '$app/paths';
	import { goto } from '$app/navigation';
</script>

<!-- ******************** 💎 BODY 💎 ********************** -->
<svelte:head>
	<title>Scaffolding | Not Found | 404</title>
</svelte:head>

<!-- Not-Found Content -->
<section id="Error" class="relative pt-16 pb-32 md:pb-0 bg-black overflow-hidden">
	<img class="absolute top-0 left-0" src="{assets}/imgs/http-gradient.svg" alt="" />
	<div class="relative z-10 container px-4 mx-auto">
		<div class="flex flex-wrap items-center -m-8">
			<div class="w-full md:w-1/2 p-8 self-end">
				<img
					class="mx-auto transform hover:scale-105 transition ease-in-out duration-1000"
					src="{assets}/imgs/error-code.png"
					alt=""
				/>
			</div>
			<div class="w-full md:w-1/2 p-8">
				<div>
					<h2
						class="mb-7 text-6xl md:text-8xl xl:text-10xl text-center text-white font-bold tracking-px-n leading-none"
					>
						Page Not Found
					</h2>
					<p
						class="mb-12 text-xl text-gray-400 text-center font-medium leading-relaxed md:max-w-lg mx-auto"
					>
						We’re sorry, the page you requested could not be found. Please go back to
						homepage
					</p>
					<div class="md:max-w-max mx-auto">
						<button
							on:click={() => goto('/')}
							class="inline-flex flex-wrap justify-center items-center py-4 px-6 w-full text-white hover:text-black font-semibold border border-gray-700 hover:border-gray-800 rounded-lg focus:ring focus:ring-white bg-transparent hover:bg-gray-50 transition ease-in-out duration-200"
							type="button"
						>
							<svg
								class="mr-2.5"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.66667 12.6666L2 7.99998M2 7.99998L6.66667 3.33331M2 7.99998L14 7.99998"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<span>Go Back to Homepage</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ******************* 🎨 STYLE 🎨 ******************** -->
<style>
</style>
