<!-- ************************ PROPERTIES **************************** -->
<script lang="ts">
	/** @type {import("./$types").PageData} */
	import { page } from '$app/stores';
</script>

<!-- ************************** BODY ******************************* -->
<main class="mt-32">
	<div class="md:max-w-md mx-auto">
		<div class="mb-10 text-center">
			<section class="py-3">
				<div class="container px-4 mx-auto">
					<div class="relative py-10 px-12 text-center bg-[#9292c829] rounded-xl">
						<img
							class="rounded-full block mx-auto mb-5 w-28 h-28"
							src={$page.data.session?.user.image}
							alt=""
						/>
						<h4 class="text-xl text-gray-600 font-bold mb-3">
							{$page.data.session?.user.name}
						</h4>
						<p class="text-gray-400 mb-8">{$page.data.session?.user.email}</p>
						<div class="flex flex-wrap items-center -mx-2">
							<div class="w-full">
								<a
									class="flex px-2 py-3 items-center justify-center bg-gray-800 hover:bg-gray-700 text-sm leading-6 font-bold text-white rounded-xl transition duration-200"
									href="#"
								>
									<span class="ml-3">Create New Post</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</main>

<!-- ************************* STYLES *****************************	-->
<style lang="scss">
</style>
