import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, fetch }: any) => {
	// Customize locals here, IF NEEDED
	locals.scaffolding = 'by Hugh Caluscusin';

	// Get URQL options
	const response = await fetch('/api/get/urql-options/hasura');
	const urqlOptions = await response.json();
	locals.urqlOptions = urqlOptions;

	// Auth.js based on their docs, adds session property
	const session = locals.getSession();

	// Auth.js adds getSession function in the locals, so we need to serialize
	const _locals = JSON.parse(JSON.stringify(locals));

	return {
		..._locals,
		session,
	};
};
