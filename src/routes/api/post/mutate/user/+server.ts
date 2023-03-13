import { error, fail, redirect, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { gql, createClient } from '@urql/svelte';

// Utils
import { getHasuraUrqlOptions } from '$lib/server/utils/getHasuraUrqlOptions';

// GQLs
import ADD_USER from '$lib/client/gql/mutation/ADD_USER';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	let result;

	const urqlOptions: any = getHasuraUrqlOptions();
	if (urqlOptions) {
		const client = createClient(urqlOptions);

		const vars: any = {
			email: data.email,
			name: data.name,
			avatar: data.image,
			oauth: data.oauth,
			token: data.token,
			verified: true,
		};

		result = await client.mutation(ADD_USER, vars).toPromise();
	}

	if (result && result.error) return json(result.error);

	return json({});
};
