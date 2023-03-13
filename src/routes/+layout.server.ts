import type { LayoutServerLoad } from './$types';

// Utils
import { getHasuraUrqlOptions } from '$lib/server/utils/getHasuraUrqlOptions';

export const load: LayoutServerLoad = async ({ locals, fetch }: any) => {
	// Locals: Customize locals here, if needed only
	locals.scaffoldAuthor = 'by Hugh Caluscusin';
	// Set URQL options for HASURA
	locals.urqlOptions = getHasuraUrqlOptions();

	// Get also Auth.js session here just in case you want to put conditional
	// checks in the client (page) aspect
	const session = locals.getSession();

	// Auth.js adds getSession function in the locals, so we need to serialize
	const _locals = JSON.parse(JSON.stringify(locals));

	return {
		..._locals,
		session,
	};
};
