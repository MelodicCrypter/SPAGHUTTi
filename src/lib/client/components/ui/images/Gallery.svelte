<!-- ************************ PROPERTIES **************************** -->
<script lang="ts">
    /** @type {import('./$types').PageData} */
    import { assets } from "$app/paths";

    // Props
    export let galleryData: object[] = [];
</script>

<!-- ************************** BODY ******************************* -->
<section class="container mx-auto px-4 max-w-screen-xl">
    <div class="flex flex-wrap mb-8 -mx-4">
        {#if galleryData && galleryData.length > 0}
            {#each galleryData as data}
                <div class="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
                    <div class="relative">
                        <img class="h-[16rem] w-full rounded-lg object-cover" src="{assets}/imgs/{data.img}" alt="">
                        <div class="absolute inset-0 bg-gray-900 opacity-80 rounded-lg"></div>
                        <div class="absolute inset-0 p-6 flex justify-center">
                            <div class="max-w-md my-auto">
                                <span class="text-purple-600 font-bold">{data.title}</span>
                                <h2 class="text-2xl lg:text-3xl text-white font-bold my-6">{data.stack}</h2>
                                <div class="max-w-xs">
                                    <p class="mb-6 text-gray-400">{data.body} <a
                                            href="{data.link}" target="_blank" class="text-indigo-400">Learn more</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        {:else}
            <div class="w-full text-center mx-auto">
                <p class="text-2xl text-gray-500 mt-[16%]">Loading Gallery...</p>
            </div>
        {/if}
    </div>
</section>

<!-- ************************* STYLES *****************************	-->
<style lang="scss">
</style>
