import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

// TODO: DO NOT FORGET TO SETUP CORS IF IN DIGITALOCEAN APP
const serverDefaults = {
	port: 3999,
	cors: {
		origin: [
			// add incoming whitelisted domains here
			/\.ngrok\.io$/,
		],
	},
};
export default defineConfig({
	plugins: [sveltekit()],
	server: { ...serverDefaults, host: true },
	preview: { ...serverDefaults },
	optimizeDeps: {
		exclude: ['@urql/svelte'],
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
});
