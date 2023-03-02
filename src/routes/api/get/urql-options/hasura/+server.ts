import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { HASURA_ADMIN_KEY } from '$env/static/private';
import { PUBLIC_GRAPHQL_ENDPOINT } from '$env/static/public';

export const GET: RequestHandler = ({ request, isDataRequest }) => {
	if (HASURA_ADMIN_KEY === '' || HASURA_ADMIN_KEY === undefined)
		throw error(404, 'Hasura key not available!');

	const // Set Default options
		defaultOptions = {
			// the graphql url
			url: PUBLIC_GRAPHQL_ENDPOINT as string,
			// fetchOptions for authentication, Hasura
			fetchOptions: {
				headers: {
					'content-type': 'application/json',
					'x-hasura-admin-secret': HASURA_ADMIN_KEY as string,
				},
			},
			// default request policy
			requestPolicy: 'cache-and-network',
		};

	return json(defaultOptions);
};
