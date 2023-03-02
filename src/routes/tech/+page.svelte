<!-- ************************ PROPERTIES **************************** -->
<script lang="ts">
	/** @type {import("./$types").PageData} */

	// Components
	import Gallery from "$lib/client/components/ui/images/Gallery.svelte";

	// States
	const stacks = [
		{
			title: 'UI Framework 🔥',
			stack: 'SvelteKit',
			body: 'SvelteKit is a UI framework built on top of Svelte.',
			link: 'https://kit.svelte.dev/',
			img: 'bg1.jpeg'
		},
		{
			title: 'Hybrid Server 🔥',
			stack: 'Hasura',
			body: 'A blazing-fast GraphQL server for GQL and REST.',
			link: 'https://hasura.io/',
			img: 'bg2.jpeg'
		},
		{
			title: 'Serverless DB 🔥',
			stack: 'Postgres Neon',
			body: 'Multi-cloud and fully namaged Postgress.',
			link: 'https://neon.tech/',
			img: 'bg3.jpeg'
		},
		{
			title: 'Authentication 🔥',
			stack: 'Auth.js',
			body: 'An open source authentication by Next team.',
			link: 'https://authjs.dev/',
			img: 'bg4.jpeg'
		},
		{
			title: 'GraphQL Client 🔥',
			stack: 'URQL',
			body: 'Highly customizable GraphQL client.',
			link: 'https://formidable.com/open-source/urql/',
			img: 'bg5.jpeg'
		},
		{
			title: 'CSS Framework 🔥',
			stack: 'Tailwind',
			body: 'A utility-first CSS framework packed with classes.',
			link: 'https://tailwindcss.com/',
			img: 'bg6.jpeg'
		},
		{
			title: 'High-Level Language 🔥',
			stack: 'TypeScript',
			body: 'A strongly typed programming language.',
			link: 'https://www.typescriptlang.org/',
			img: 'bg7.jpeg'
		},
		{
			title: 'Standard Tools 🔥',
			stack: 'ESLint | Prettier',
			body: 'These are common tools in the industry.',
			link: 'https://www.google.com/search?q=eslint+prettier&oq=eslint+prettier&sourceid=chrome&ie=UTF-8',
			img: 'bg8.jpeg'
		},
	]
</script>

<!-- ************************** BODY ******************************* -->
<main class="mt-10">
	<Gallery galleryData={stacks} />
</main>


<!-- ************************* STYLES *****************************	-->
<style lang="scss">
</style>
