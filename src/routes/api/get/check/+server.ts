import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request, isDataRequest }) => {
	return json('Hi, there!');
};
