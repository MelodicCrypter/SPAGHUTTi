import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }): Promise<any> => {
	// Check if authorized
	const session = await parent();
	if (!session) throw redirect(303, '/');

	return {};
};
