import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }): Promise<any> => {
	// Check if authorized, this will automatically fire the authorization() in hooks.server
	await parent();

	return {};
};
