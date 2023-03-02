import { error, fail, redirect, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { gql, createClient } from '@urql/svelte';

import { PUBLIC_GRAPHQL_ENDPOINT } from '$env/static/public';
import { HASURA_ADMIN_KEY } from '$env/static/private';

// GQLs
import ADD_USER from '$lib/client/gql/mutation/ADD_USER';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();

	const client = createClient({
		url: PUBLIC_GRAPHQL_ENDPOINT as string,
		fetchOptions: {
			headers: {
				'content-type': 'application/json',
				'x-hasura-admin-secret': HASURA_ADMIN_KEY as string,
			},
		},
		requestPolicy: 'network-only',
	});

	const vars: any = {
		email: data.email,
		name: data.name,
		avatar: data.image,
		oauth: data.oauth,
		token: data.token,
		verified: true,
	};

	const result = await client.mutation(ADD_USER, vars).toPromise();
	if (result.error) return json(result.error);

	return json({});
};
